export default function ModuleNav({ modules }) {
  return (
    <section className="moduleNavSection" aria-label="Choose a module">
      <div className="container">
        <div className="sectionIntro">
          <p className="eyebrow">Choose a starting point</p>
          <h2>Three focused tools in one assistant.</h2>
          <p>
            The first version keeps the product simple. Users start with the area
            they need today, then move into a guided assistant flow later.
          </p>
        </div>

        <div className="moduleNavGrid">
          {modules.map((module) => (
            <a className="moduleNavItem" href={`#${module.slug}`} key={module.slug}>
              <span>{module.icon}</span>
              <strong>{module.title}</strong>
              <small>{module.shortDescription}</small>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
