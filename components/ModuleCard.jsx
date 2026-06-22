export default function ModuleCard(props) {
  const module = props.module;

  return (
    <article className="card" id={module.slug}>
      <div className="cardTopline">
        <div className="cardIcon">{module.icon}</div>
        <span>{module.audience}</span>
      </div>

      <h2>{module.title}</h2>
      <p>{module.description}</p>

      <ul>
        {module.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}
