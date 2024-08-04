import styles from "./CreationSection.module.css";
import Gallary from "./Gallary";
import Button from "./Button";
function CreationSection() {
  return (
    <section className={styles.creation}>
      <div className={styles.creationHeading}>
        <h2>Our Creations</h2>
        <Button>See All</Button>
      </div>
      <Gallary />
    </section>
  );
}

export default CreationSection;
