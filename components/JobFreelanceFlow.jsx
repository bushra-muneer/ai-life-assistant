'use client';

import { useMemo, useState } from 'react';
import { jobFreelanceTemplates } from '../data/jobFreelanceTemplates';

export default function JobFreelanceFlow() {
  const [selectedTemplate, setSelectedTemplate] = useState(jobFreelanceTemplates[0]);
  const [userText, setUserText] = useState('');

  const preview = useMemo(() => {
    const trimmedText = userText.trim();

    if (!trimmedText) {
      return selectedTemplate.emptyPreview;
    }

    return `${selectedTemplate.previewTitle}\n\n${selectedTemplate.output}\n\n${selectedTemplate.contextLabel}: ${trimmedText}`;
  }, [selectedTemplate, userText]);

  return (
    <section className="dailyFlowSection" id="job-freelance-flow">
      <div className="container dailyFlowGrid">
        <div className="dailyFlowIntro">
          <p className="eyebrow">Day 5 build</p>
          <h2>Job and Freelance Coach flow.</h2>
          <p>
            Pick a career task, add rough details, and preview a simple output
            structure. This keeps the MVP useful for students, job seekers, and
            beginner freelancers before adding real AI calls.
          </p>
        </div>

        <div className="dailyFlowCard">
          <div className="promptChoices" aria-label="Job and Freelance Coach choices">
            {jobFreelanceTemplates.map((option) => (
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

          <div className="templateGuide" aria-label="Selected career template structure">
            <span>Coach structure</span>
            <ul>
              {selectedTemplate.templateSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>

          <label className="inputLabel" htmlFor="job-freelance-input">
            What career task do you need help with?
          </label>
          <textarea
            id="job-freelance-input"
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
