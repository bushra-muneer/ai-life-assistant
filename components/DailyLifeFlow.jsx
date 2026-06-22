'use client';

import { useMemo, useState } from 'react';

const promptOptions = [
  {
    id: 'reply',
    title: 'Write a reply',
    helper: 'Turn a rough message into a clear, polite response.',
    placeholder: 'Paste the message you need to reply to...',
    sample: 'Thanks for sharing this. I understand the situation. I will review it and get back to you with a clear update soon.'
  },
  {
    id: 'plan',
    title: 'Plan my day',
    helper: 'Organize tasks into a simple daily action plan.',
    placeholder: 'Write your tasks for today...',
    sample: 'Start with the most urgent task, keep one focused work block, handle small errands together, and end with a quick review.'
  },
  {
    id: 'explain',
    title: 'Explain simply',
    helper: 'Make a confusing topic easier to understand.',
    placeholder: 'Write the topic or paragraph you want explained...',
    sample: 'Here is the simple meaning: this idea is about breaking a complex task into smaller steps so it becomes easier to manage.'
  }
];

export default function DailyLifeFlow() {
  const [selectedPrompt, setSelectedPrompt] = useState(promptOptions[0]);
  const [userText, setUserText] = useState('');

  const preview = useMemo(() => {
    const trimmedText = userText.trim();

    if (!trimmedText) {
      return selectedPrompt.sample;
    }

    if (selectedPrompt.id === 'reply') {
      return `Here is a clear reply you can use:\n\nThanks for your message. I understand your point. I will check this properly and update you with the next step soon.\n\nOriginal context: ${trimmedText}`;
    }

    if (selectedPrompt.id === 'plan') {
      return `Simple plan:\n\n1. Pick the most important task first.\n2. Keep one focused block for deep work.\n3. Group small tasks together.\n4. End the day by checking what is still pending.\n\nYour tasks: ${trimmedText}`;
    }

    return `Simple explanation:\n\nThis means we should understand the main idea first, then break it into smaller parts. That makes it easier to act on.\n\nTopic: ${trimmedText}`;
  }, [selectedPrompt, userText]);

  return (
    <section className="dailyFlowSection" id="daily-life-flow">
      <div className="container dailyFlowGrid">
        <div className="dailyFlowIntro">
          <p className="eyebrow">Day 3 build</p>
          <h2>Daily Life Assistant interactive flow.</h2>
          <p>
            Choose a daily task, add your rough text, and preview the kind of
            simple help this assistant will provide. This is a front-end MVP flow
            only, so no private data is sent anywhere yet.
          </p>
        </div>

        <div className="dailyFlowCard">
          <div className="promptChoices" aria-label="Daily Life prompt choices">
            {promptOptions.map((option) => (
              <button
                className={selectedPrompt.id === option.id ? 'promptChoice active' : 'promptChoice'}
                key={option.id}
                onClick={() => setSelectedPrompt(option)}
                type="button"
              >
                <strong>{option.title}</strong>
                <span>{option.helper}</span>
              </button>
            ))}
          </div>

          <label className="inputLabel" htmlFor="daily-life-input">
            What do you need help with?
          </label>
          <textarea
            id="daily-life-input"
            onChange={(event) => setUserText(event.target.value)}
            placeholder={selectedPrompt.placeholder}
            rows="6"
            value={userText}
          />

          <div className="assistantPreview" aria-live="polite">
            <span>Preview answer</span>
            <p>{preview}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
