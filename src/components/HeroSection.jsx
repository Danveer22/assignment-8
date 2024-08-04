import styles from "./HeroSection.module.css";
function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroTagBox}>
        <h1>Immersive Experiences that deliver</h1>
      </div>
    </section>
  );
}

export default HeroSection;
