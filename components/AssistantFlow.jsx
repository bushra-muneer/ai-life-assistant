'use client';

import { useMemo, useState } from 'react';

export default function AssistantFlow({
  sectionId,
  eyebrow,
  title,
  description,
  templates,
  choicesLabel,
  guideLabel,
  inputLabel,
  inputId
}) {
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);
  const [userText, setUserText] = useState('');

  const preview = useMemo(() => {
    const trimmedText = userText.trim();

    if (!trimmedText) {
      return selectedTemplate.emptyPreview;
    }

    return `${selectedTemplate.previewTitle}\n\n${selectedTemplate.output}\n\n${selectedTemplate.contextLabel}: ${trimmedText}`;
  }, [selectedTemplate, userText]);

  return (
    <section className="dailyFlowSection" id={sectionId}>
      <div className="container dailyFlowGrid">
        <div className="dailyFlowIntro">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="dailyFlowCard">
          <div className="promptChoices" aria-label={choicesLabel}>
            {templates.map((option) => (
              <button
                className={selectedTemplate.id === option.id ? 'promptChoice active' : 'promptChoice'}
                key={option.id}
                onClick={() => setSelectedTemplate(option)}
                type="button"
              >
                <strong>{option.title}</strong>
                <span>{option.helper}</span>
              </button>
            ))}
          </div>

          <div className="templateGuide" aria-label={`${guideLabel} structure`}>
            <span>{guideLabel}</span>
            <ul>
              {selectedTemplate.templateSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>

          <label className="inputLabel" htmlFor={inputId}>
            {inputLabel}
          </label>
          <textarea
            id={inputId}
            onChange={(event) => setUserText(event.target.value)}
            placeholder={selectedTemplate.placeholder}
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
