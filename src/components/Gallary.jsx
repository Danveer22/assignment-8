import styles from "./Gallary.module.css";

function Gallary() {
  return (
    <section className={styles.gallary}>
      <div className={styles.gallaryContainer}>
        <figure>
          <img src="/images/desktop/image-deep-earth.jpg" alt="Deep Earth" />
          <figcaption>Deep Earth</figcaption>
        </figure>
        <figure>
          <img
            src="/images/desktop/image-night-arcade.jpg"
            alt="Night Arcade"
          />
          <figcaption>Night Arcade</figcaption>
        </figure>
        <figure>
          <img
            src="/images/desktop/image-soccer-team.jpg"
            alt="Soccer Team VR"
          />
          <figcaption>Soccer Team VR</figcaption>
        </figure>
        <figure>
          <img src="/images/desktop/image-grid.jpg" alt="The Grid" />
          <figcaption>The Grid</figcaption>
        </figure>
        <figure>
          <img
            src="/images/desktop/image-from-above.jpg"
            alt="From Up Above VR"
          />
          <figcaption>From Up Above VR</figcaption>
        </figure>
        <figure>
          <img
            src="/images/desktop/image-pocket-borealis.jpg"
            alt="Pocket Borealis"
          />
          <figcaption>Pocket Borealis</figcaption>
        </figure>
        <figure>
          <img src="/images/desktop/image-curiosity.jpg" alt="The Curiosity" />
          <figcaption>The Curiosity</figcaption>
        </figure>
        <figure>
          <img src="/images/desktop/image-fisheye.jpg" alt="Make it Fisheye" />
          <figcaption>Make it Fisheye</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Gallary;
