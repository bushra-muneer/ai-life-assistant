export default function AppHeader() {
  return (
    <header className="siteHeader">
      <div className="container headerInner">
        <a className="brand" href="#top">
          <span className="brandMark">AI</span>
          <span>AI Life Assistant</span>
        </a>

        <nav className="headerNav">
          <a href="#modules">Modules</a>
          <a href="#how-it-works">How it works</a>
          <a href="#roadmap">Roadmap</a>
        </nav>

        <a className="headerAction" href="#modules">Start</a>
      </div>
    </header>
  );
}
