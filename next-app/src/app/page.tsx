import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import ExperienceCubes from "@/components/ExperienceCubes";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background pattern */}
      <div className="fixed inset-0 bg-pattern pointer-events-none z-0" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Profile />
        <ExperienceCubes />
        <Education />
        <Skills />
        <Contact />

        <footer className="text-center py-8 text-sm text-gray">
          <p>
            Daniela Belén Kaul · Alianzas Estratégicas & Finanzas · Buenos
            Aires, Argentina
          </p>
        </footer>
      </div>
    </div>
  );
}
