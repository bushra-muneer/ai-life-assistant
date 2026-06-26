import AppHeader from '../components/AppHeader';
import DailyLifeFlow from '../components/DailyLifeFlow';
import HowItWorks from '../components/HowItWorks';
import JobFreelanceFlow from '../components/JobFreelanceFlow';
import MealBudgetFlow from '../components/MealBudgetFlow';
import ModuleCard from '../components/ModuleCard';
import ModuleNav from '../components/ModuleNav';
import RoadmapPreview from '../components/RoadmapPreview';
import { modules } from '../modules';

export default function HomePage() {
  return (
    <>
      <AppHeader />
      <main id="top">
        <section className="hero">
          <div className="container heroGrid">
            <div>
              <span className="badge">MVP build in progress</span>
              <h1>Practical AI help for daily life.</h1>
              <p>
                Start with a module, choose a guided prompt, and get help with
                everyday planning, career progress, or simple meal decisions.
              </p>
              <div className="actions">
                <a className="primaryButton" href="#daily-life-flow">Try Daily Life flow</a>
                <a className="secondaryButton" href="#job-freelance-flow">Try Career flow</a>
                <a className="secondaryButton" href="#meal-budget-flow">Try Meal flow</a>
              </div>
            </div>

            <aside className="heroPanel">
              <p className="eyebrow">Language direction</p>
              <h2>English UI first, multilingual support next.</h2>
              <p>
                The interface stays clean in English for the MVP. Assistant
                responses can later support Urdu, Hindi, and Roman Urdu based on
                user preference.
              </p>
            </aside>
          </div>
        </section>

        <ModuleNav modules={modules} />

        <section className="container grid" id="modules">
          {modules.map((module) => (
            <ModuleCard key={module.slug} module={module} />
          ))}
        </section>

        <DailyLifeFlow />
        <JobFreelanceFlow />
        <MealBudgetFlow />
        <HowItWorks />
        <RoadmapPreview />
      </main>
    </>
  );
}
