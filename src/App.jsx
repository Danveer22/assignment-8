import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import VRSection from "./components/VRSection";
import CreationSection from "./components/CreationSection";
import Footer from "./components/Footer";
import { useState } from "react";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <main>
        <HeroSection isOpen={isOpen} setIsOpen={setIsOpen} />
        <VRSection />
        <CreationSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
