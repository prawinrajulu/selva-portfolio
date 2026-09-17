export default function Certifications() {
  return (
    <section className="max-w-[1120px] mx-auto px-margin-mobile lg:px-margin py-space-xl w-full" id="certifications">
      {/* Section Header */}
      <div className="flex flex-col gap-space-xs mb-8">
        <div className="flex items-center gap-2">
          <span className="font-code-sm text-code-sm text-primary font-bold">05 // VERIFIED LEARNING</span>
          <div className="h-[1px] w-12 bg-outline-variant/60" />
        </div>
        <h2 className="font-headline-xl text-headline-xl tracking-tight text-on-surface">Certifications</h2>
        <p className="font-body-md text-body-md text-secondary">Strictly verified curriculum credentials</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
        {/* Certificate 1: NPTEL */}
        <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">workspace_premium</span>
              </div>
              <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-DEFAULT bg-secondary-container text-on-secondary-fixed flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Verified Course
              </span>
            </div>
            <span className="font-code-sm text-code-sm text-primary font-semibold">NPTEL / SWAYAM</span>
            <h3 className="font-headline-md text-headline-md text-on-surface mt-1 mb-2">
              NPTEL Certification – Python for Data Science
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Rigorous national-level academic curriculum covering Python syntax, data visualization, exploratory data routines, and foundational data science workflows through peer-reviewed evaluations.
            </p>
          </div>

          <div className="mt-6 pt-4 flex items-center justify-between border-t border-outline-variant/10">
            <span className="font-code-sm text-code-sm text-secondary">Curriculum Credential</span>
            <span className="font-label-sm text-label-sm px-2.5 py-1 rounded-DEFAULT bg-surface-container text-on-surface flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-primary">verified</span>
              Credential Verified
            </span>
          </div>
        </div>

        {/* Certificate 2: Python for Data Science Internship */}
        <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-tertiary text-on-tertiary flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">card_membership</span>
              </div>
              <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-DEFAULT bg-secondary-container text-on-secondary-fixed flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                Internship Credit
              </span>
            </div>
            <span className="font-code-sm text-code-sm text-tertiary font-semibold">Practical Industry Training</span>
            <h3 className="font-headline-md text-headline-md text-on-surface mt-1 mb-2">
              Python for Data Science Internship Certificate
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Applied industry training certificate validating structured problem solving, hands-on data parsing, and machine learning implementation using Python libraries.
            </p>
          </div>

          <div className="mt-6 pt-4 flex items-center justify-between border-t border-outline-variant/10">
            <span className="font-code-sm text-code-sm text-secondary">Hands-on Execution</span>
            <span className="font-label-sm text-label-sm px-2.5 py-1 rounded-DEFAULT bg-surface-container text-on-surface flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-primary">verified</span>
              Credential Verified
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
