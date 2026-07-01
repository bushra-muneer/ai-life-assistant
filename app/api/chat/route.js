import { getModuleSystemPrompt } from '../../../data/moduleSystemPrompts';

const MAX_MESSAGE_LENGTH = 2000;

function cleanText(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function buildFallbackReply({ module, message, templateTitle }) {
  const label = templateTitle ? `${templateTitle} request` : 'request';

  if (module === 'career') {
    return `Here is a simple career draft for your ${label}:\n\n1. Start with the main goal.\n2. Mention the most relevant skill or experience.\n3. End with a clear next step.\n\nYour note: ${message}`;
  }

  if (module === 'meal') {
    return `Here is a simple meal or budget plan for your ${label}:\n\n1. Use what you already have first.\n2. Pick one easy main option.\n3. Keep the shopping list short and practical.\n\nYour note: ${message}`;
  }

  return `Here is a simple daily-life draft for your ${label}:\n\n1. Keep the answer clear.\n2. Use polite, natural wording.\n3. End with the next action.\n\nYour note: ${message}`;
}

function extractOutputText(data) {
  if (typeof data.output_text === 'string') {
    return data.output_text;
  }

  if (!Array.isArray(data.output)) {
    return '';
  }

  return data.output
    .flatMap((item) => item.content || [])
    .map((content) => content.text || '')
    .filter(Boolean)
    .join('\n')
    .trim();
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const module = cleanText(body.module) || 'daily';
  const message = cleanText(body.message || body.input || body.prompt);
  const templateTitle = cleanText(body.templateTitle || body.template);

  if (!message) {
    return Response.json({ error: 'Message is required.' }, { status: 400 });
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return Response.json(
      { error: `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.` },
      { status: 413 }
    );
  }

  const fallbackReply = buildFallbackReply({ module, message, templateTitle });
  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_MODEL;

  if (!apiKey || !model) {
    return Response.json({
      reply: fallbackReply,
      source: 'local-fallback',
      reason: 'OPENAI_API_KEY and OPENAI_MODEL are not configured.'
    });
  }

  try {
    const providerResponse = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model,
        input: [
          {
            role: 'system',
            content: getModuleSystemPrompt(module)
          },
          {
            role: 'user',
            content: `Template: ${templateTitle || 'General'}\n\nUser request: ${message}`
          }
        ]
      })
    });

    if (!providerResponse.ok) {
      return Response.json(
        {
          reply: fallbackReply,
          source: 'local-fallback',
          reason: 'AI provider request failed.'
        },
        { status: 200 }
      );
    }

    const data = await providerResponse.json();
    const reply = extractOutputText(data) || fallbackReply;

    return Response.json({
      reply,
      source: reply === fallbackReply ? 'local-fallback' : 'ai-provider'
    });
  } catch {
    return Response.json({
      reply: fallbackReply,
      source: 'local-fallback',
      reason: 'AI provider request could not be completed.'
    });
  }
}
