const steps = [
  {
    title: 'Pick a module',
    text: 'Start with daily help, career coaching, or meal planning.'
  },
  {
    title: 'Use a guided prompt',
    text: 'The app gives simple starting prompts so users are not stuck on a blank screen.'
  },
  {
    title: 'Save useful answers',
    text: 'Later versions will let users save plans, replies, recipes, and career tasks.'
  }
];

export default function HowItWorks() {
  return (
    <section className="infoSection" id="how-it-works">
      <div className="container">
        <div className="sectionIntro">
          <p className="eyebrow">How it works</p>
          <h2>Built around simple daily actions.</h2>
          <p>
            The MVP avoids a heavy dashboard. Each module should help the user do
            one useful thing quickly.
          </p>
        </div>

        <div className="stepsGrid">
          {steps.map((step, index) => (
            <article className="stepCard" key={step.title}>
              <span>{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
