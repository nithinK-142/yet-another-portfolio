/** Small text-only diagrams (no images). Plain HTML so they reflow on phones. */

export function MonolithSplit() {
  return (
    <figure className="fig">
      <div className="split">
        <div className="split-row">
          <p className="split-label">Before</p>
          <ul className="nodes nodes-1">
            <li>
              Monolith<small>One application, one release</small>
            </li>
          </ul>
        </div>
        <div className="split-row split-after">
          <p className="split-label">After</p>
          <ul className="nodes nodes-4">
            <li>API</li>
            <li>Cron</li>
            <li>Notifications</li>
            <li>Payments</li>
          </ul>
        </div>
      </div>
      <figcaption>One application became four services, each released and scaled on its own.</figcaption>
    </figure>
  );
}

export function CampaignPipeline() {
  return (
    <figure className="fig">
      <ol className="flow">
        <li>Campaign</li>
        <li>
          Priority queue<small>Highest priority first</small>
        </li>
        <li>
          Concurrent batches<small>With crash recovery</small>
        </li>
        <li>Devices</li>
      </ol>
      <figcaption>How a campaign is delivered.</figcaption>
    </figure>
  );
}
