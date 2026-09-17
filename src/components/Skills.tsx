export default function Skills() {
  const skillsData = [
    {
      title: "Java",
      category: "Core Language",
      icon: "coffee",
      iconColor: "text-primary",
      description:
        "Foundational programming, Object-Oriented Programming (OOP), class hierarchies, standard library structures, and modular coding.",
      tags: ["OOP Concepts", "Syntax & Logic", "Data Structures"],
    },
    {
      title: "Python",
      subtitle: "(Basic)",
      category: "Scripting & Data",
      icon: "terminal",
      iconColor: "text-tertiary",
      description:
        "Essential scripting, data manipulation, file handling, algorithmic workflows, and entry-level machine learning libraries.",
      tags: ["Scripting", "Data Manipulation", "NPTEL Certified"],
    },
    {
      title: "Data Science Fundamentals",
      category: "Analytics",
      icon: "query_stats",
      iconColor: "text-primary-container",
      description:
        "Data cleaning, preprocessing routines, exploratory data analysis (EDA), and basic statistical modeling pipelines.",
      tags: ["Preprocessing", "EDA", "Analytics"],
    },
    {
      title: "Problem Solving",
      category: "Methodology",
      icon: "psychology",
      iconColor: "text-primary",
      description:
        "Logic formulation, systematic problem decomposition, conditional branch design, and algorithmic thinking for clean outputs.",
      tags: ["Logic Formulation", "Algorithmic Mindset"],
    },
    {
      title: "MS Office",
      category: "Productivity",
      icon: "table_chart",
      iconColor: "text-secondary",
      description:
        "Technical documentation, spreadsheet computations, structured records maintenance, and professional slide deck presentations.",
      tags: ["Excel", "Word", "PowerPoint"],
    },
    {
      title: "Information Technology",
      category: "IT Foundations",
      icon: "dns",
      iconColor: "text-primary",
      description:
        "Database basics, software engineering lifecycle, computer networks overview, and systems architecture fundamentals.",
      tags: ["SDLC", "Databases", "Networks"],
    },
  ];

  const interestAreas = [
    { name: "Artificial Intelligence", icon: "smart_toy" },
    { name: "Machine Learning", icon: "neurology" },
    { name: "Data Science", icon: "hub" },
    { name: "Programming", icon: "code" },
  ];

  return (
    <section className="max-w-280 mx-auto px-margin-mobile lg:px-margin py-space-xl w-full" id="skills">
      {/* Section Header */}
      <div className="flex flex-col gap-space-xs mb-8">
        <div className="flex items-center gap-2">
          <span className="font-code-sm text-code-sm text-primary font-bold">02 // COMPETENCIES</span>
          <div className="h-px w-12 bg-outline-variant/60" />
        </div>
        <h2 className="font-headline-xl text-headline-xl tracking-tight text-on-surface">Technical Skills</h2>
        <p className="font-body-md text-body-md text-secondary">
          Core competencies and foundational domains (no inflated metrics)
        </p>
      </div>

      {/* Skills Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md mb-8">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center ${skill.iconColor}`}>
                  <span className="material-symbols-outlined text-[24px]">{skill.icon}</span>
                </div>
                <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-DEFAULT bg-secondary-container text-on-secondary-fixed">
                  {skill.category}
                </span>
              </div>

              <h3 className="font-headline-md text-headline-md text-on-surface mb-1">
                {skill.title}{" "}
                {skill.subtitle && (
                  <span className="font-code-sm text-code-sm text-secondary font-normal">{skill.subtitle}</span>
                )}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 leading-relaxed">
                {skill.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-outline-variant/10">
              {skill.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="font-code-sm text-code-sm px-2 py-0.5 rounded-DEFAULT bg-surface-container text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Areas of Special Interest */}
      <div className="bg-surface-container p-space-lg rounded-xl shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Areas of Special Interest</h3>
            <p className="font-body-sm text-body-sm text-secondary">
              Active learning targets and domains I am passionate about growing in
            </p>
          </div>
          <span className="font-label-sm text-label-sm px-2.5 py-1 rounded-DEFAULT bg-secondary-container text-on-secondary-fixed font-semibold self-start sm:self-auto">
            Aspirational Focus
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm">
          {interestAreas.map((interest, idx) => (
            <div
              key={idx}
              className="p-space-md rounded-lg bg-surface-container-lowest flex items-center gap-2.5 shadow-sm"
            >
              <span className="material-symbols-outlined text-primary text-[20px]">{interest.icon}</span>
              <span className="font-headline-sm text-headline-sm text-on-surface">{interest.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
