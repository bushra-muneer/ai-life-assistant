const roadmapItems = [
  'Module navigation and app shell',
  'Guided prompts for each module',
  'Chat-style assistant flow',
  'Saved answers and recent activity'
];

export default function RoadmapPreview() {
  return (
    <section className="roadmapSection" id="roadmap">
      <div className="container roadmapCard">
        <div>
          <p className="eyebrow">Near-term roadmap</p>
          <h2>Small, useful releases before heavy features.</h2>
          <p>
            The build plan focuses on making the assistant usable first, then
            improving retention with saved plans and daily prompts.
          </p>
        </div>

        <ul>
          {roadmapItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
