import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import VRSection from "./components/VRSection";
import CreationSection from "./components/CreationSection";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <VRSection />
        <CreationSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
