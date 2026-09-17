export default function Languages() {
  return (
    <section className="max-w-[1120px] mx-auto px-margin-mobile lg:px-margin py-space-lg w-full">
      <div className="bg-surface-container p-space-lg rounded-xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-headline-md text-headline-md text-on-surface">Languages</h3>
          <p className="font-body-sm text-body-sm text-secondary">
            Linguistic capabilities for global and regional collaboration
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-space-sm">
          <div className="px-4 py-2 rounded-lg bg-surface-container-lowest shadow-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[18px]">translate</span>
            <span className="font-headline-sm text-headline-sm text-on-surface">Tamil</span>
            <span className="font-code-sm text-code-sm text-secondary">(Native / Fluent)</span>
          </div>

          <div className="px-4 py-2 rounded-lg bg-surface-container-lowest shadow-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[18px]">language</span>
            <span className="font-headline-sm text-headline-sm text-on-surface">English</span>
            <span className="font-code-sm text-code-sm text-secondary">(Professional Working)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
