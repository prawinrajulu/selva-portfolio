export default function Strengths() {
  const strengths = [
    {
      title: "Quick Learner",
      icon: "speed",
      description: "Rapidly assimilating new frameworks, APIs, and business logic.",
    },
    {
      title: "Team Player",
      icon: "diversity_3",
      description: "Collaborative mindset with dependable, constructive communication.",
    },
    {
      title: "Adaptability",
      icon: "change_circle",
      description: "Pivoting flexibly across new toolsets, environments, and requirements.",
    },
    {
      title: "Communication",
      icon: "chat",
      description: "Clear articulation of technical ideas and regular milestone status.",
    },
    {
      title: "Positive Attitude",
      icon: "sentiment_satisfied",
      description: "Constructive, solution-focused attitude in the face of debug hurdles.",
    },
  ];

  return (
    <section className="max-w-[1120px] mx-auto px-margin-mobile lg:px-margin py-space-xl w-full">
      {/* Section Header */}
      <div className="flex flex-col gap-space-xs mb-8">
        <div className="flex items-center gap-2">
          <span className="font-code-sm text-code-sm text-primary font-bold">07 // PROFESSIONAL ATTRIBUTES</span>
          <div className="h-[1px] w-12 bg-outline-variant/60" />
        </div>
        <h2 className="font-headline-xl text-headline-xl tracking-tight text-on-surface">Strengths</h2>
        <p className="font-body-md text-body-md text-secondary">Personal and professional workplace qualities</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-sm">
        {strengths.map((item, idx) => (
          <div key={idx} className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-2">
            <div className="w-8 h-8 rounded-lg bg-surface-container text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">{item.title}</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
