export default function Education() {
  return (
    <section className="max-w-[1120px] mx-auto px-margin-mobile lg:px-margin py-space-xl w-full" id="education">
      {/* Section Header */}
      <div className="flex flex-col gap-space-xs mb-8">
        <div className="flex items-center gap-2">
          <span className="font-code-sm text-code-sm text-primary font-bold">04 // ACADEMICS</span>
          <div className="h-[1px] w-12 bg-outline-variant/60" />
        </div>
        <h2 className="font-headline-xl text-headline-xl tracking-tight text-on-surface">Education</h2>
        <p className="font-body-md text-body-md text-secondary">
          Institutional degree progress and academic coursework
        </p>
      </div>

      {/* Academic Timeline Node */}
      <div className="relative pl-6 sm:pl-8">
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-secondary-container" />
        <div className="absolute -left-[5px] top-4 w-3 h-3 rounded-full bg-primary ring-4 ring-surface" />

        <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                Undergraduate Degree
              </span>
              <h3 className="font-headline-lg text-headline-lg text-on-surface">
                Bachelor of Technology (B.Tech) in Information Technology
              </h3>
              <p className="font-headline-sm text-headline-sm text-secondary font-medium">
                St. Peter&apos;s College of Engineering and Technology
              </p>
            </div>
            <div className="text-left sm:text-right">
              <span className="inline-block px-2.5 py-1 rounded-DEFAULT bg-secondary-container text-on-secondary-fixed font-code-sm text-code-sm font-semibold">
                Status: Final Year
              </span>
              <div className="font-code-sm text-code-sm text-secondary mt-1">Expected Completion: 2025</div>
            </div>
          </div>

          {/* Academic Score & Coursework Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm my-4">
            <div className="p-space-md rounded-lg bg-surface-container flex flex-col justify-center">
              <div className="font-label-sm text-label-sm text-secondary uppercase">Cumulative Grade Point</div>
              <div className="font-headline-xl text-headline-xl font-bold text-primary">
                7.9 <span className="font-body-sm text-body-sm text-secondary font-normal">/ 10</span>
              </div>
              <div className="font-code-sm text-code-sm text-secondary">Consistent Academic Record</div>
            </div>

            <div className="p-space-md rounded-lg bg-surface-container flex flex-col justify-center sm:col-span-2">
              <div className="font-label-sm text-label-sm text-secondary uppercase">Core IT Coursework</div>
              <div className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                Object-Oriented Programming, Data Structures &amp; Algorithms, Database Management Systems, Computer Networks, Operating Systems, Software Engineering, Python Programming, and Data Analytics.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 font-code-sm text-code-sm text-secondary pt-2 border-t border-outline-variant/10">
            <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
            <span>All semesters cleared in good standing without backlogs.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
