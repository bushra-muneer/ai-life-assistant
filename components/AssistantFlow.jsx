'use client';

import { useEffect, useMemo, useState } from 'react';

const getStorageKey = (sectionId) => `ai-life-assistant:${sectionId}:saved-answers`;

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
  const [savedAnswers, setSavedAnswers] = useState([]);

  const storageKey = useMemo(() => getStorageKey(sectionId), [sectionId]);

  const preview = useMemo(() => {
    const trimmedText = userText.trim();

    if (!trimmedText) {
      return selectedTemplate.emptyPreview;
    }

    return `${selectedTemplate.previewTitle}\n\n${selectedTemplate.output}\n\n${selectedTemplate.contextLabel}: ${trimmedText}`;
  }, [selectedTemplate, userText]);

  useEffect(() => {
    const rawSavedAnswers = window.localStorage.getItem(storageKey);

    if (!rawSavedAnswers) {
      return;
    }

    try {
      setSavedAnswers(JSON.parse(rawSavedAnswers));
    } catch {
      setSavedAnswers([]);
    }
  }, [storageKey]);

  const savePreview = () => {
    const nextSavedAnswers = [
      {
        id: Date.now(),
        templateTitle: selectedTemplate.title,
        text: preview
      },
      ...savedAnswers
    ].slice(0, 3);

    setSavedAnswers(nextSavedAnswers);
    window.localStorage.setItem(storageKey, JSON.stringify(nextSavedAnswers));
  };

  const clearSavedAnswers = () => {
    setSavedAnswers([]);
    window.localStorage.removeItem(storageKey);
  };

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

          <div className="actions">
            <button className="primaryButton" onClick={savePreview} type="button">
              Save preview
            </button>
            {savedAnswers.length > 0 ? (
              <button className="secondaryButton" onClick={clearSavedAnswers} type="button">
                Clear saved
              </button>
            ) : null}
          </div>

          {savedAnswers.length > 0 ? (
            <div className="templateGuide" aria-label="Saved answers">
              <span>Saved locally</span>
              <ul>
                {savedAnswers.map((answer) => (
                  <li key={answer.id}>
                    <strong>{answer.templateTitle}:</strong> {answer.text}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
