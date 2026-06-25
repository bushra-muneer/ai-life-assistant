export const jobFreelanceTemplates = [
  {
    id: 'cv-improve',
    title: 'Improve my CV',
    helper: 'Turn rough experience into clearer CV bullets.',
    placeholder: 'Paste your current CV line or describe your experience...',
    emptyPreview: 'Example: Built and maintained responsive web pages using React, improving user experience and reducing repeated manual work.',
    previewTitle: 'CV improvement draft:',
    output: 'Rewrite the experience as a clear achievement. Start with an action verb, mention the tool or skill, and explain the result in simple words.',
    contextLabel: 'Your experience',
    templateSteps: [
      'Start with the role or task you performed.',
      'Mention tools, skills, or responsibility.',
      'End with the value or result if you know it.'
    ]
  },
  {
    id: 'proposal',
    title: 'Write a proposal',
    helper: 'Create a short freelance proposal from a job post.',
    placeholder: 'Paste the freelance job post or client request...',
    emptyPreview: 'Example: Hi, I can help you build this cleanly and keep the first version simple. I have worked with similar web app flows and can start with a focused milestone.',
    previewTitle: 'Freelance proposal draft:',
    output: 'Open with a short understanding of the client need, explain how you can help, mention one relevant skill, and close with a simple next step.',
    contextLabel: 'Client request',
    templateSteps: [
      'Show that you understood the client problem.',
      'Keep the proposal short and specific.',
      'End by asking for the next step or project details.'
    ]
  },
  {
    id: 'interview',
    title: 'Prepare interview answer',
    helper: 'Structure a simple answer for common interview questions.',
    placeholder: 'Write the interview question or topic...',
    emptyPreview: 'Example: I usually start by understanding the problem, then I break it into smaller steps, test the main flow, and improve based on feedback.',
    previewTitle: 'Interview answer structure:',
    output: 'Answer in three parts: what you did, how you did it, and what the result was. Keep the wording natural and avoid sounding memorized.',
    contextLabel: 'Interview topic',
    templateSteps: [
      'Give a direct answer first.',
      'Add one real example from your work or study.',
      'Finish with what you learned or improved.'
    ]
  }
];
