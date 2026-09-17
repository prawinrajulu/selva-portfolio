import Image from "next/image";

export default function About() {
  return (
    <section className="max-w-280 mx-auto px-margin-mobile lg:px-margin py-space-xl w-full" id="about">
      {/* Section Header */}
      <div className="flex flex-col gap-space-xs mb-8">
        <div className="flex items-center gap-2">
          <span className="font-code-sm text-code-sm text-primary font-bold">01 // PROFILE</span>
          <div className="h-px w-12 bg-outline-variant/60" />
        </div>
        <h2 className="font-headline-xl text-headline-xl tracking-tight text-on-surface">About Me</h2>
        <p className="font-body-md text-body-md text-secondary">Academic background and career aspirations</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        {/* 7 Cols: Narrative & Key Traits */}
        <div className="lg:col-span-7 flex flex-col gap-space-md">
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-4">
            <h3 className="font-headline-md text-headline-md text-on-surface">Final-Year Software &amp; Data Enthusiast</h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              I am a final-year Information Technology student passionate about programming, data science, and machine learning. As a motivated learner, I combine foundational software fundamentals with an analytical mindset to solve structured problems.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Eager to launch my professional career in software engineering and technology consulting, I bring a collaborative work ethic, proactive adaptability, and a commitment to rapid skill acquisition across production stacks.
            </p>
          </div>

          {/* Key Attributes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
            <div className="p-space-md rounded-xl bg-surface-container shadow-sm flex flex-col gap-1.5">
              <div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">bolt</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">Quick Learner</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Absorbs frameworks and engineering toolsets with speed.</p>
            </div>

            <div className="p-space-md rounded-xl bg-surface-container shadow-sm flex flex-col gap-1.5">
              <div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">sync_alt</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">Adaptable</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Comfortably pivots across modern environments &amp; teams.</p>
            </div>

            <div className="p-space-md rounded-xl bg-surface-container shadow-sm flex flex-col gap-1.5">
              <div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">groups</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">Team Player</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Thrives in collaborative and communicative agile dynamics.</p>
            </div>
          </div>
        </div>

        {/* 5 Cols: Compact Institutional Card */}
        <div className="lg:col-span-5 w-full">
          <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
            <div className="flex items-center gap-3.5 pb-3 border-b border-outline-variant/20">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-outline-variant/40 shrink-0 shadow-sm">
                <Image
                  src="/selvendran.jpg"
                  alt="Selvendran M"
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                    Institutional Credentials
                  </span>
                  <span className="px-2 py-0.5 rounded-DEFAULT bg-secondary-container text-on-secondary-fixed font-code-sm text-code-sm shrink-0">
                    2021 – 2025
                  </span>
                </div>
                <div className="font-headline-sm text-headline-sm text-on-surface truncate">Selvendran M</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[22px] mt-0.5">school</span>
                <div>
                  <div className="font-label-sm text-label-sm text-secondary uppercase">Degree Program</div>
                  <div className="font-headline-sm text-headline-sm text-on-surface">B.Tech Information Technology</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-tertiary text-[22px] mt-0.5">apartment</span>
                <div>
                  <div className="font-label-sm text-label-sm text-secondary uppercase">Institution</div>
                  <div className="font-headline-sm text-headline-sm text-on-surface">
                    St. Peter&apos;s College of Engineering and Technology
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-container text-[22px] mt-0.5">verified</span>
                <div>
                  <div className="font-label-sm text-label-sm text-secondary uppercase">Academic Standing</div>
                  <div className="font-headline-sm text-headline-sm text-on-surface">Final Year (8th Semester)</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-tertiary-container text-[22px] mt-0.5">analytics</span>
                <div>
                  <div className="font-label-sm text-label-sm text-secondary uppercase">Cumulative Grade Point Average</div>
                  <div className="font-headline-lg text-headline-lg font-bold text-primary">
                    7.9 <span className="font-body-sm text-body-sm text-secondary font-normal">/ 10.0 CGPA</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 flex items-center gap-2 font-code-sm text-code-sm text-secondary border-t border-outline-variant/20">
              <span className="w-2 h-2 rounded-full bg-primary inline-block" />
              <span>Engineering Accreditation Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
