import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white transition-colors duration-500 dark:bg-[#12060d]">
      <div className="pointer-events-none fixed -left-32 top-28 h-80 w-80 rounded-full bg-brand/10 blur-3xl dark:bg-blush/10" />
      <div className="pointer-events-none fixed -right-32 bottom-24 h-96 w-96 rounded-full bg-blush/10 blur-3xl dark:bg-brand/20" />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
