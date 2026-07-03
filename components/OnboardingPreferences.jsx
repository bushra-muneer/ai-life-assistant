'use client';

import { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'ai-life-assistant:onboarding-preferences';

const languageOptions = [
  { value: 'English', helper: 'Clean MVP interface and responses.' },
  { value: 'Roman Urdu', helper: 'Helpful for Urdu/Hindi users who type in English letters.' },
  { value: 'Urdu', helper: 'For future localized assistant responses.' },
  { value: 'Hindi', helper: 'For future localized assistant responses.' }
];

const toneOptions = [
  { value: 'Simple', helper: 'Short, clear, and easy to follow.' },
  { value: 'Friendly', helper: 'Warm and supportive without being too long.' },
  { value: 'Step-by-step', helper: 'Breaks tasks into small actions.' }
];

export default function OnboardingPreferences() {
  const [language, setLanguage] = useState(languageOptions[0].value);
  const [tone, setTone] = useState(toneOptions[0].value);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const rawPreferences = window.localStorage.getItem(STORAGE_KEY);

    if (!rawPreferences) {
      return;
    }

    try {
      const preferences = JSON.parse(rawPreferences);
      setLanguage(preferences.language || languageOptions[0].value);
      setTone(preferences.tone || toneOptions[0].value);
      setIsSaved(true);
    } catch {
      setIsSaved(false);
    }
  }, []);

  const preferenceSummary = useMemo(
    () => `Your assistant will prefer ${language} with a ${tone.toLowerCase()} response style.`,
    [language, tone]
  );

  const savePreferences = () => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        language,
        tone
      })
    );
    setIsSaved(true);
  };

  return (
    <section className="dailyFlowSection" id="onboarding-preferences">
      <div className="container dailyFlowGrid">
        <div className="dailyFlowIntro">
          <p className="eyebrow">Day 11 build</p>
          <h2>Set your assistant preferences.</h2>
          <p>
            Choose a preferred language and response style for the MVP. These
            preferences are saved locally for now and can later be sent with chat
            requests to personalize AI answers.
          </p>
        </div>

        <div className="dailyFlowCard">
          <div>
            <label className="inputLabel">Preferred language</label>
            <div className="promptChoices" aria-label="Preferred language choices">
              {languageOptions.map((option) => (
                <button
                  className={language === option.value ? 'promptChoice active' : 'promptChoice'}
                  key={option.value}
                  onClick={() => setLanguage(option.value)}
                  type="button"
                >
                  <strong>{option.value}</strong>
                  <span>{option.helper}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="inputLabel">Response style</label>
            <div className="promptChoices" aria-label="Response style choices">
              {toneOptions.map((option) => (
                <button
                  className={tone === option.value ? 'promptChoice active' : 'promptChoice'}
                  key={option.value}
                  onClick={() => setTone(option.value)}
                  type="button"
                >
                  <strong>{option.value}</strong>
                  <span>{option.helper}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="assistantPreview" aria-live="polite">
            <span>{isSaved ? 'Saved preference' : 'Preference preview'}</span>
            <p>{preferenceSummary}</p>
          </div>

          <div className="actions">
            <button className="primaryButton" onClick={savePreferences} type="button">
              Save preferences
            </button>
            <a className="secondaryButton" href="#daily-life-flow">
              Continue to assistant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
