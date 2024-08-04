import styles from "./VRSection.module.css";

function VRSection() {
  return (
    <section className={styles.vrSection}>
      <img
        className={styles.vrImg}
        src="/images/desktop/image-interactive.jpg"
        srcSet="/images/mobile/image-interactive.jpg 768w"
        alt="image-interactive"
      />
      <article className={styles.vrText}>
        <div>
          <h2>THE LEADER IN INTERACTIVE VR</h2>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </article>
    </section>
  );
}

export default VRSection;
