import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Workshops from "@/components/Workshops";
import ProjectsNotice from "@/components/ProjectsNotice";
import Strengths from "@/components/Strengths";
import Languages from "@/components/Languages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-16 flex-1 bg-surface">
        <div className="flex flex-col w-full">
          {/* Subtle Ambient Glow Overlay */}
          <div className="relative w-full overflow-hidden">
            <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
            <div className="absolute top-96 -right-40 w-96 h-96 rounded-full bg-tertiary/5 blur-3xl pointer-events-none" />

            {/* 1. Hero Section */}
            <Hero />

            <div className="h-10" />

            {/* 2. About Section */}
            <About />

            <div className="h-10" />

            {/* 3. Skills Section */}
            <Skills />

            <div className="h-10" />

            {/* 4. Experience Section */}
            <Experience />

            <div className="h-10" />

            {/* 5. Education Section */}
            <Education />

            <div className="h-10" />

            {/* 6. Certifications Section */}
            <Certifications />

            <div className="h-10" />

            {/* 7. Workshops Section */}
            <Workshops />

            <div className="h-10" />

            {/* 8. Projects Status Notice */}
            <ProjectsNotice />

            <div className="h-10" />

            {/* 9. Strengths Section */}
            <Strengths />

            <div className="h-10" />

            {/* 10. Languages Section */}
            <Languages />

            <div className="h-10" />

            {/* 11. Contact Section */}
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
