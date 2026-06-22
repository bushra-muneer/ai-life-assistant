export default function ModuleCard({ title, icon, description, points }) {
  return (
    <section className="card">
      <div className="cardIcon">{icon}</div>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </section>
  );
}
