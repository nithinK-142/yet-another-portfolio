/** Small, text-only diagrams (no images). Plain HTML so they reflow on phones. */

export function MonolithSplit() {
  return (
    <figure className="fig">
      <div className="flow row4" role="img" aria-label="Monolith split into API, cron, notification and payment services">
        <div>API</div>
        <div>Cron</div>
        <div>Notifications</div>
        <div>Payments</div>
      </div>
      <figcaption>Monolith to four services.</figcaption>
    </figure>
  );
}

export function CampaignPipeline() {
  return (
    <figure className="fig">
      <div className="flow row4" role="img" aria-label="Campaign, priority queue, concurrent batches, devices">
        <div>Campaign</div>
        <div>
          Priority queue<small>Highest first</small>
        </div>
        <div>
          Concurrent batches<small>With crash recovery</small>
        </div>
        <div>Devices</div>
      </div>
      <figcaption>How a campaign is delivered.</figcaption>
    </figure>
  );
}
