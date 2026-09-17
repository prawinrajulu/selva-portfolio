import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative max-w-280 mx-auto px-margin-mobile lg:px-margin pt-12 pb-20 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        {/* Left 7 Cols: Identity & Pitch */}
        <div className="lg:col-span-7 flex flex-col items-start gap-space-md">
          {/* Profile Photo & Recruiter Eyebrow Badge */}
          <div className="flex items-center gap-3">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-primary shadow-sm shrink-0">
              <Image
                src="/selvendran.jpg"
                alt="Selvendran M"
                fill
                sizes="64px"
                className="object-cover"
                priority
              />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                Final Year B.Tech IT Student
              </span>
            </div>
          </div>

          {/* Headings */}
          <div className="flex flex-col gap-space-xs">
            <h1 className="font-display-lg text-display-lg tracking-tight text-on-surface">
              Hi, I&apos;m <span className="text-primary font-bold">Selvendran M</span>.
            </h1>
            <p className="font-headline-md text-headline-md text-secondary font-medium">
              Information Technology Student passionate about Programming, AI &amp; Data Science.
            </p>
          </div>

          {/* Resume Bio */}
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Motivated and enthusiastic B.Tech Information Technology student with a CGPA of 7.9, passionate about technology, programming, and data science.
          </p>

          {/* Quick Highlight Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md">
              <span className="material-symbols-outlined text-[16px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                grade
              </span>
              <span>CGPA 7.9 / 10</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md">
              <span className="material-symbols-outlined text-[16px] text-tertiary">school</span>
              <span>B.Tech IT (Final Year)</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md">
              <span className="material-symbols-outlined text-[16px] text-primary">work</span>
              <span>Open for Internships &amp; Full-Time</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-space-sm pt-3">
            <a
              href="#about"
              className="h-10 px-space-md rounded-lg bg-primary text-on-primary font-headline-sm text-headline-sm flex items-center justify-center gap-2 shadow-sm hover:bg-primary-container transition-colors"
            >
              <span>View My Profile</span>
              <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
            </a>
            <a
              href="#contact"
              className="h-10 px-space-md rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-headline-sm text-headline-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">mail</span>
              <span>Contact Me</span>
            </a>
          </div>
        </div>

        {/* Right 5 Cols: Minimalist Terminal Artifact */}
        <div className="lg:col-span-5 w-full mt-6 lg:mt-0">
          <div className="bg-inverse-surface rounded-xl shadow-md overflow-hidden text-inverse-on-surface">
            {/* Terminal Window Header */}
            <div className="bg-inverse-surface px-4 py-2.5 flex items-center justify-between border-b border-outline-variant/10">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-error inline-block opacity-80" />
                <span className="w-3 h-3 rounded-full bg-tertiary-fixed-dim inline-block opacity-80" />
                <span className="w-3 h-3 rounded-full bg-primary-fixed inline-block opacity-80" />
              </div>
              <span className="font-code-sm text-code-sm text-outline-variant">candidate_meta.json</span>
              <div className="flex items-center text-outline-variant font-code-sm text-code-sm">
                <span>UTF-8</span>
              </div>
            </div>

            {/* JSON Code View */}
            <div className="p-5 font-code-md text-code-md space-y-1.5 overflow-x-auto selection:bg-primary selection:text-on-primary">
              <p className="text-outline-variant">&#123;</p>
              <p className="pl-4">
                <span className="text-primary-fixed-dim">&quot;name&quot;</span>: <span className="text-tertiary-fixed">&quot;Selvendran M&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-primary-fixed-dim">&quot;status&quot;</span>: <span className="text-tertiary-fixed">&quot;Final Year Student&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-primary-fixed-dim">&quot;degree&quot;</span>: <span className="text-tertiary-fixed">&quot;B.Tech Information Technology&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-primary-fixed-dim">&quot;cgpa&quot;</span>: <span className="text-tertiary-fixed-dim font-bold">7.9</span>,
              </p>
              <p className="pl-4">
                <span className="text-primary-fixed-dim">&quot;institution&quot;</span>: <span className="text-tertiary-fixed">&quot;St. Peter&apos;s College of Eng. &amp; Tech.&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-primary-fixed-dim">&quot;core_focus&quot;</span>: [
              </p>
              <p className="pl-8 text-on-primary-container">&quot;Java&quot;,</p>
              <p className="pl-8 text-on-primary-container">&quot;Python&quot;,</p>
              <p className="pl-8 text-on-primary-container">&quot;Data Science&quot;,</p>
              <p className="pl-8 text-on-primary-container">&quot;Machine Learning&quot;</p>
              <p className="pl-4">],</p>
              <p className="pl-4">
                <span className="text-primary-fixed-dim">&quot;open_for&quot;</span>: <span className="text-secondary-fixed">&quot;Internships &amp; Entry-Level Roles&quot;</span>
              </p>
              <p className="text-outline-variant">&#125;</p>
            </div>

            {/* Terminal Status Footer */}
            <div className="bg-surface-container-lowest/5 px-4 py-2 flex items-center justify-between font-code-sm text-code-sm text-outline-variant border-t border-outline-variant/10">
              <span className="flex items-center gap-1.5 text-tertiary-fixed-dim">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim animate-ping" />
                Ready for Technical Evaluation
              </span>
              <span>100% Resume Match</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
