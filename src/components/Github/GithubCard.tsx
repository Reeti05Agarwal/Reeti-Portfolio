export default function GithubCard() {
  return (
    <div className="glitchCard-wrapper">
      <div className="glitchCard-card">
        <div className="glitchCard-header"></div>
        <div className="glitchCard-avatar">
     
 
        </div>
        <div className="glitchCard-body">
          <div className="glitchCard-name" data-text="octo_cat">
            Reeti05Agarwal
          </div>
          <p className="glitchCard-title">Cyber Security</p>
          <div className="glitchCard-stats">
            <div className="glitchCard-stat">
              <span className="glitchCard-stat-label">REPOSITORIES</span>
              <span className="glitchCard-stat-value" data-text="128">
                41
              </span>
            </div>
            <div className="glitchCard-stat">
              <span className="glitchCard-stat-label">FOLLOWERS</span>
              <span className="glitchCard-stat-value" data-text="12">
                1
              </span>
            </div>
          </div>
          <a
            href="http://github.com/Reeti05Agarwal"
            target="_blank" 
            rel="noopener noreferrer"
            className="glitchCard-button"
            data-text="VIEW_ON_GITHUB"
          >
            <span className="btn-text">VIEW_ON_GITHUB</span>
          </a>
        </div>
      </div>
    </div>
  );
}
 