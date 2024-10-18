import NavBar from "./components/NavBar";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-[url('/images/home.jpg')] bg-no-repeat bg-fixed bg-cover relative">
        <div className="bg-black/20 inset-0 absolute min-h-screen">
          <NavBar />
          <Hero />
        </div>
      </div>
      <About />
      <Services />
      <Work />
      <Portfolio />
      <Team />
    </main>
  );
}
