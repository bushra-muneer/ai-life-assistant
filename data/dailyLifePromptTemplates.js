export const dailyLifePromptTemplates = [
  {
    id: 'reply',
    title: 'Write a reply',
    helper: 'Turn a rough message into a clear, polite response.',
    placeholder: 'Paste the message you need to reply to...',
    emptyPreview: 'Thanks for sharing this. I understand the situation. I will review it and get back to you with a clear update soon.',
    previewTitle: 'Here is a clear reply you can use:',
    output: 'Thanks for your message. I understand your point. I will check this properly and update you with the next step soon.',
    contextLabel: 'Original context',
    templateSteps: [
      'Acknowledge the message politely.',
      'Keep the answer short and clear.',
      'End with the next action or timeline.'
    ]
  },
  {
    id: 'plan',
    title: 'Plan my day',
    helper: 'Organize tasks into a simple daily action plan.',
    placeholder: 'Write your tasks for today...',
    emptyPreview: 'Start with the most urgent task, keep one focused work block, handle small errands together, and end with a quick review.',
    previewTitle: 'Simple plan:',
    output: '1. Pick the most important task first.\n2. Keep one focused block for deep work.\n3. Group small tasks together.\n4. End the day by checking what is still pending.',
    contextLabel: 'Your tasks',
    templateSteps: [
      'List everything without overthinking.',
      'Pick the highest priority item first.',
      'Group small tasks to avoid context switching.'
    ]
  },
  {
    id: 'explain',
    title: 'Explain simply',
    helper: 'Make a confusing topic easier to understand.',
    placeholder: 'Write the topic or paragraph you want explained...',
    emptyPreview: 'Here is the simple meaning: this idea is about breaking a complex task into smaller steps so it becomes easier to manage.',
    previewTitle: 'Simple explanation:',
    output: 'This means we should understand the main idea first, then break it into smaller parts. That makes it easier to act on.',
    contextLabel: 'Topic',
    templateSteps: [
      'Start with the main idea.',
      'Use simple words instead of technical language.',
      'Give one practical example if needed.'
    ]
  }
];
