export default function ProjectsNotice() {
  return (
    <section className="max-w-[1120px] mx-auto px-margin-mobile lg:px-margin py-space-md w-full">
      <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 border border-outline-variant/30">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-primary-fixed-dim text-on-primary-fixed flex items-center justify-center flex-shrink-0">
            <span className="material-symbols-outlined text-[22px]">construction</span>
          </div>
          <div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">
              Projects &amp; Academic Work — Under Active Development
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Detailed project repositories, architecture schematics, and capstone case studies will be published here upon final-semester evaluation.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 font-code-sm text-code-sm text-primary font-semibold flex-shrink-0">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span>Deployment In Progress</span>
        </div>
      </div>
    </section>
  );
}
