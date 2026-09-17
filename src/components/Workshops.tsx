export default function Workshops() {
  return (
    <section className="max-w-280 mx-auto px-margin-mobile lg:px-margin py-space-xl w-full" id="workshops">
      {/* Section Header */}
      <div className="flex flex-col gap-space-xs mb-8">
        <div className="flex items-center gap-2">
          <span className="font-code-sm text-code-sm text-primary font-bold">06 // WORKSHOPS</span>
          <div className="h-px w-12 bg-outline-variant/60" />
        </div>
        <h2 className="font-headline-xl text-headline-xl tracking-tight text-on-surface">Workshops &amp; Learning</h2>
        <p className="font-body-md text-body-md text-secondary">
          Technical workshops and specialized practical seminars
        </p>
      </div>

      <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[28px]">biotech</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Artificial Intelligence Tools Workshop
                </h3>
                <span className="px-2 py-0.5 rounded-DEFAULT bg-secondary-container text-on-secondary-fixed font-code-sm text-code-sm">
                  Interactive Seminar
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
                Practical workshop exploring emerging modern AI tools, prompt workflows, automated task scripts, and developer productivity tooling across software development pipelines.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 self-start md:self-auto">
            <span className="font-code-sm text-code-sm px-2.5 py-1 rounded-DEFAULT bg-surface-container text-on-surface">
              AI Toolkits
            </span>
            <span className="font-code-sm text-code-sm px-2.5 py-1 rounded-DEFAULT bg-surface-container text-on-surface">
              Workflows
            </span>
            <span className="font-code-sm text-code-sm px-2.5 py-1 rounded-DEFAULT bg-surface-container text-on-surface">
              Automation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
