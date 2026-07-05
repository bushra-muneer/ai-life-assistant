'use client';

import { useEffect, useState } from 'react';

const savedSources = [
  {
    key: 'ai-life-assistant:daily-life-flow:saved-answers',
    module: 'Daily Life Assistant',
    href: '/#daily-life-flow'
  },
  {
    key: 'ai-life-assistant:job-freelance-flow:saved-answers',
    module: 'Job and Freelance Coach',
    href: '/#job-freelance-flow'
  },
  {
    key: 'ai-life-assistant:meal-budget-flow:saved-answers',
    module: 'Meal and Budget Planner',
    href: '/#meal-budget-flow'
  }
];

function readSavedItems() {
  return savedSources.flatMap((source) => {
    const rawItems = window.localStorage.getItem(source.key);

    if (!rawItems) {
      return [];
    }

    try {
      const parsedItems = JSON.parse(rawItems);

      if (!Array.isArray(parsedItems)) {
        return [];
      }

      return parsedItems.map((item) => ({
        ...item,
        module: source.module,
        href: source.href
      }));
    } catch {
      return [];
    }
  });
}

export default function SavedItemsView() {
  const [savedItems, setSavedItems] = useState([]);

  useEffect(() => {
    setSavedItems(readSavedItems());
  }, []);

  const clearAllSavedItems = () => {
    savedSources.forEach((source) => window.localStorage.removeItem(source.key));
    setSavedItems([]);
  };

  return (
    <main id="top">
      <section className="hero">
        <div className="container heroGrid">
          <div>
            <span className="badge">Day 12 build</span>
            <h1>Saved assistant items.</h1>
            <p>
              Review the preview answers saved locally from Daily Life, Career,
              and Meal flows. This is still browser-only for the MVP.
            </p>
            <div className="actions">
              <a className="primaryButton" href="/">
                Back to assistant
              </a>
              {savedItems.length > 0 ? (
                <button className="secondaryButton" onClick={clearAllSavedItems} type="button">
                  Clear all saved
                </button>
              ) : null}
            </div>
          </div>

          <aside className="heroPanel">
            <p className="eyebrow">Local storage</p>
            <h2>{savedItems.length} saved item{savedItems.length === 1 ? '' : 's'} found.</h2>
            <p>
              Saved answers stay on this browser only. Later, this page can connect
              to a user account and synced history.
            </p>
          </aside>
        </div>
      </section>

      <section className="container grid" aria-label="Saved assistant items">
        {savedItems.length > 0 ? (
          savedItems.map((item) => (
            <article className="card" key={`${item.module}-${item.id}`}>
              <div className="cardTopline">
                <span className="cardIcon">SAVE</span>
                <span>{item.module}</span>
              </div>
              <h2>{item.templateTitle}</h2>
              <p>{item.text}</p>
              <a className="secondaryButton" href={item.href}>
                Open flow
              </a>
            </article>
          ))
        ) : (
          <article className="card">
            <div className="cardTopline">
              <span className="cardIcon">0</span>
              <span>No saved items yet</span>
            </div>
            <h2>Save a preview first.</h2>
            <p>
              Go back to any assistant flow, type a request, and click Save preview.
              Your saved answers will appear here.
            </p>
            <a className="primaryButton" href="/#daily-life-flow">
              Try Daily Life flow
            </a>
          </article>
        )}
      </section>
    </main>
  );
}
