'use client';

import { useMemo, useState } from 'react';
import { mealBudgetTemplates } from '../data/mealBudgetTemplates';

export default function MealBudgetFlow() {
  const [selectedTemplate, setSelectedTemplate] = useState(mealBudgetTemplates[0]);
  const [userText, setUserText] = useState('');

  const preview = useMemo(() => {
    const trimmedText = userText.trim();

    if (!trimmedText) {
      return selectedTemplate.emptyPreview;
    }

    return `${selectedTemplate.previewTitle}\n\n${selectedTemplate.output}\n\n${selectedTemplate.contextLabel}: ${trimmedText}`;
  }, [selectedTemplate, userText]);

  return (
    <section className="dailyFlowSection" id="meal-budget-flow">
      <div className="container dailyFlowGrid">
        <div className="dailyFlowIntro">
          <p className="eyebrow">Day 6 build</p>
          <h2>Meal and Budget Planner flow.</h2>
          <p>
            Choose a meal-planning task, add your ingredients or budget details,
            and preview a simple planning structure. This keeps the MVP practical
            for students, families, and busy home planners.
          </p>
        </div>

        <div className="dailyFlowCard">
          <div className="promptChoices" aria-label="Meal and Budget Planner choices">
            {mealBudgetTemplates.map((option) => (
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

          <div className="templateGuide" aria-label="Selected meal planning structure">
            <span>Planner structure</span>
            <ul>
              {selectedTemplate.templateSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>

          <label className="inputLabel" htmlFor="meal-budget-input">
            What meal or budget problem do you need help with?
          </label>
          <textarea
            id="meal-budget-input"
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
