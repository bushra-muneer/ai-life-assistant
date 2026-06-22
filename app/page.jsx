import ModuleCard from '../components/ModuleCard';
import { modules } from '../modules';

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <span className="badge">MVP Day 1</span>
          <h1>Har roz ke kaam, smart tareeqe se.</h1>
          <p>
            AI Life Assistant ek simple app hai jo daily help, career coaching,
            aur meal plus budget planning ko ek clean experience mein laati hai.
          </p>
          <div className="actions">
            <a className="primaryButton" href="#modules">Explore modules</a>
            <a className="secondaryButton" href="https://github.com/bushra-muneer/ai-life-assistant">View GitHub</a>
          </div>
        </div>
      </section>

      <section className="container grid" id="modules">
        {modules.map((module) => (
          <ModuleCard key={module.title} {...module} />
        ))}
      </section>
    </main>
  );
}
