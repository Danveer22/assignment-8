import styles from "./Gallary.module.css";
import Button from "./Button";

function Gallary() {
  return (
    <section className={styles.gallary}>
      <div className={styles.gallaryContainer}>
        <figure>
          <img
            src="/images/desktop/image-deep-earth.jpg"
            srcSet="/images/mobile/image-deep-earth.jpg 768w, /images/desktop/image-deep-earth.jpg 1200w"
            alt="Deep Earth"
          />
          <figcaption>Deep Earth</figcaption>
        </figure>
        <figure>
          <img
            src="/images/desktop/image-night-arcade.jpg"
            srcSet="/images/mobile/image-night-arcade.jpg 768w, /images/desktop/image-night-arcade.jpg 1200w"
            alt="Night Arcade"
          />
          <figcaption>Night Arcade</figcaption>
        </figure>
        <figure>
          <img
            src="/images/desktop/image-soccer-team.jpg"
            srcSet="/images/mobile/image-soccer-team.jpg 768w, /images/desktop/image-soccer-team.jpg 1200w"
            alt="Soccer Team VR"
          />
          <figcaption>Soccer Team VR</figcaption>
        </figure>
        <figure>
          <img
            src="/images/desktop/image-grid.jpg"
            srcSet="/images/mobile/image-grid.jpg 768w, /images/desktop/image-grid.jpg 1200w"
            alt="The Grid"
          />
          <figcaption>The Grid</figcaption>
        </figure>
        <figure>
          <img
            src="/images/desktop/image-from-above.jpg"
            srcSet="/images/mobile/image-from-above.jpg 768w, /images/desktop/image-from-above.jpg 1200w"
            alt="From Up Above VR"
          />
          <figcaption>From Up Above VR</figcaption>
        </figure>
        <figure>
          <img
            src="/images/desktop/image-pocket-borealis.jpg"
            srcSet="/images/mobile/image-pocket-borealis.jpg 768w, /images/desktop/image-pocket-borealis.jpg 1200w"
            alt="Pocket Borealis"
          />
          <figcaption>Pocket Borealis</figcaption>
        </figure>
        <figure>
          <img
            src="/images/desktop/image-curiosity.jpg"
            srcSet="/images/mobile/image-curiosity.jpg 768w, /images/desktop/image-curiosity.jpg 1200w"
            alt="The Curiosity"
          />
          <figcaption>The Curiosity</figcaption>
        </figure>
        <figure>
          <img
            src="/images/desktop/image-fisheye.jpg"
            srcSet="/images/mobile/image-fisheye.jpg 768w, /images/desktop/image-fisheye.jpg 1200w"
            alt="Make it Fisheye"
          />
          <figcaption>Make it Fisheye</figcaption>
        </figure>
        <Button>See all</Button>
      </div>
    </section>
  );
}

export default Gallary;
