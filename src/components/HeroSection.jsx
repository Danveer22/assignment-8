import styles from "./HeroSection.module.css";
import Header from "./Header";
function HeroSection({ isOpen, setIsOpen }) {
  return (
    <section className={styles.hero}>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={styles.heroTagBox}>
        <h1>Immersive Experiences that deliver</h1>
      </div>
    </section>
  );
}

export default HeroSection;
