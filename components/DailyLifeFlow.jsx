'use client';

import { useMemo, useState } from 'react';
import { dailyLifePromptTemplates } from '../data/dailyLifePromptTemplates';

export default function DailyLifeFlow() {
  const [selectedPrompt, setSelectedPrompt] = useState(dailyLifePromptTemplates[0]);
  const [userText, setUserText] = useState('');

  const preview = useMemo(() => {
    const trimmedText = userText.trim();

    if (!trimmedText) {
      return selectedPrompt.emptyPreview;
    }

    return `${selectedPrompt.previewTitle}\n\n${selectedPrompt.output}\n\n${selectedPrompt.contextLabel}: ${trimmedText}`;
  }, [selectedPrompt, userText]);

  return (
    <section className="dailyFlowSection" id="daily-life-flow">
      <div className="container dailyFlowGrid">
        <div className="dailyFlowIntro">
          <p className="eyebrow">Day 4 build</p>
          <h2>Daily Life prompt templates.</h2>
          <p>
            Choose a reusable template, add your rough text, and preview how the
            assistant should structure useful daily help. The templates stay local
            for now and can later connect to the server-side AI route.
          </p>
        </div>

        <div className="dailyFlowCard">
          <div className="promptChoices" aria-label="Daily Life prompt choices">
            {dailyLifePromptTemplates.map((option) => (
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

          <div className="templateGuide" aria-label="Selected prompt template structure">
            <span>Template structure</span>
            <ul>
              {selectedPrompt.templateSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
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
