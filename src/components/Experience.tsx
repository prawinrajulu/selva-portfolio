export default function Experience() {
  return (
    <section className="max-w-[1120px] mx-auto px-margin-mobile lg:px-margin py-space-xl w-full" id="experience">
      {/* Section Header */}
      <div className="flex flex-col gap-space-xs mb-8">
        <div className="flex items-center gap-2">
          <span className="font-code-sm text-code-sm text-primary font-bold">03 // PRACTICAL EXPERIENCE</span>
          <div className="h-[1px] w-12 bg-outline-variant/60" />
        </div>
        <h2 className="font-headline-xl text-headline-xl tracking-tight text-on-surface">Experience</h2>
        <p className="font-body-md text-body-md text-secondary">
          Verified internship engagements and practical implementations
        </p>
      </div>

      {/* Experience Timeline Card */}
      <div className="relative pl-6 sm:pl-8">
        {/* Visual Rail Indicator */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-secondary-container" />
        <div className="absolute -left-[5px] top-4 w-3 h-3 rounded-full bg-primary ring-4 ring-surface" />

        <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <h3 className="font-headline-lg text-headline-lg text-on-surface">AIML using Python Intern</h3>
              <span className="px-2 py-0.5 rounded-DEFAULT bg-secondary-container text-on-secondary-fixed font-code-sm text-code-sm">
                Internship
              </span>
            </div>
            <span className="font-code-sm text-code-sm text-secondary font-medium">Practical Technical Training</span>
          </div>

          {/* Exact Resume Description Callout */}
          <div className="p-space-md rounded-lg bg-surface-container-low mb-4 border-l-2 border-primary">
            <p className="font-body-lg text-body-lg text-on-surface font-medium italic">
              &ldquo;Gained hands-on experience in Machine Learning, Deep Learning and data analysis using Python.&rdquo;
            </p>
          </div>

          {/* Structured Deliverables */}
          <div className="space-y-2 mb-4 text-on-surface-variant font-body-md text-body-md">
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary text-[18px] mt-1">check_circle</span>
              <span>
                Engaged in data exploration, feature extraction, and model baseline training using standard Python environments.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary text-[18px] mt-1">check_circle</span>
              <span>
                Studied deep neural architectures, foundational ML algorithms, and practical performance evaluation metrics.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary text-[18px] mt-1">check_circle</span>
              <span>
                Exercised best practices in script modularization, pipeline debugging, and technical documentation.
              </span>
            </div>
          </div>

          {/* Focus Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-outline-variant/10">
            <span className="font-code-sm text-code-sm px-2.5 py-1 rounded-DEFAULT bg-surface-container text-on-surface font-medium">
              Python
            </span>
            <span className="font-code-sm text-code-sm px-2.5 py-1 rounded-DEFAULT bg-surface-container text-on-surface font-medium">
              Machine Learning
            </span>
            <span className="font-code-sm text-code-sm px-2.5 py-1 rounded-DEFAULT bg-surface-container text-on-surface font-medium">
              Deep Learning
            </span>
            <span className="font-code-sm text-code-sm px-2.5 py-1 rounded-DEFAULT bg-surface-container text-on-surface font-medium">
              Data Analysis
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
