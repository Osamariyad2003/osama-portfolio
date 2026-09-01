import "./GitHubActivity.css";

const GITHUB_USER = "Osamariyad2003";

function GitHubActivity() {
  return (
    <section className="section github-activity">
      <p className="eyebrow">GitHub Activity</p>

      <div className="github-activity__card">
        <img
          className="github-activity__chart"
          src={`https://ghchart.rshah.org/2b4cf0/${GITHUB_USER}`}
          alt={`${GITHUB_USER}'s GitHub contribution graph`}
          loading="lazy"
        />
        <a
          className="mono github-activity__link"
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noreferrer"
        >
          @{GITHUB_USER} on GitHub <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

export default GitHubActivity;
