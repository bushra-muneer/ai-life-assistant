export default function AppHeader() {
  return (
    <header className="siteHeader">
      <a className="skipLink" href="#top">Skip to main content</a>
      <div className="container headerInner">
        <a className="brand" href="/#top">
          <span className="brandMark">AI</span>
          <span>AI Life Assistant</span>
        </a>

        <nav className="headerNav" aria-label="Primary navigation">
          <a href="/#modules">Modules</a>
          <a href="/#how-it-works">How it works</a>
          <a href="/#roadmap">Roadmap</a>
          <a href="/saved">Saved</a>
        </nav>

        <a className="headerAction" href="/#modules" aria-label="Start with assistant modules">Start</a>
      </div>
    </header>
  );
}
