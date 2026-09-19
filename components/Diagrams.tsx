import { Figure } from "@/components/Figure";

/** One application split into four independently released services. */
export function MonolithSplit() {
  return (
    <Figure caption="One application became four services. Each one is released and scaled on its own.">
      <div className="split">
        <div className="split-row">
          <p className="split-label">Before</p>
          <ul className="nodes nodes-1">
            <li>
              Monolith
              <small>One application, one release</small>
            </li>
          </ul>
        </div>
        <div className="split-row split-row-after">
          <p className="split-label">After</p>
          <ul className="nodes nodes-4">
            <li>API</li>
            <li>Cron jobs</li>
            <li>Notifications</li>
            <li>Payments</li>
          </ul>
        </div>
      </div>
    </Figure>
  );
}

/** Campaign delivery: queued by priority, sent in concurrent batches. */
export function CampaignPipeline() {
  return (
    <Figure caption="How a campaign is delivered: queued by priority, sent in concurrent batches, and able to recover after a crash.">
      <ol className="flow">
        <li>
          Campaign
          <small>Created in the console</small>
        </li>
        <li>
          Priority queue
          <small>Highest priority first</small>
        </li>
        <li>
          Concurrent batches
          <span className="batches" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </li>
        <li>
          Devices
          <small>Push delivered</small>
        </li>
      </ol>
    </Figure>
  );
}
