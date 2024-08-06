import styles from "./Gallary.module.css";
import Button from "./Button";

function Gallary() {
  return (
    <section className={styles.gallary}>
      <div className={styles.gallaryContainer}>
        <figure>
          <picture>
            <source media="(min-width: 1200px)" srcSet="/images/desktop/image-deep-earth.jpg" />
            <source media="(max-width: 767px)" srcSet="/images/mobile/image-deep-earth.jpg" />
            <img src="/images/desktop/image-deep-earth.jpg" alt="Deep Earth" />
          </picture>
          <figcaption>Deep Earth</figcaption>
        </figure>
        <figure>
          <picture>
            <source media="(min-width: 1200px)" srcSet="/images/desktop/image-night-arcade.jpg" />
            <source media="(max-width: 767px)" srcSet="/images/mobile/image-night-arcade.jpg" />
            <img src="/images/desktop/image-night-arcade.jpg" alt="Night Arcade" />
          </picture>
          <figcaption>Night Arcade</figcaption>
        </figure>
        <figure>
          <picture>
            <source media="(min-width: 1200px)" srcSet="/images/desktop/image-soccer-team.jpg" />
            <source media="(max-width: 767px)" srcSet="/images/mobile/image-soccer-team.jpg" />
            <img src="/images/desktop/image-soccer-team.jpg" alt="Soccer Team VR" />
          </picture>
          <figcaption>Soccer Team VR</figcaption>
        </figure>
        <figure>
          <picture>
            <source media="(min-width: 1200px)" srcSet="/images/desktop/image-grid.jpg" />
            <source media="(max-width: 767px)" srcSet="/images/mobile/image-grid.jpg" />
            <img src="/images/desktop/image-grid.jpg" alt="The Grid" />
          </picture>
          <figcaption>The Grid</figcaption>
        </figure>
        <figure>
          <picture>
            <source media="(min-width: 1200px)" srcSet="/images/desktop/image-from-above.jpg" />
            <source media="(max-width: 767px)" srcSet="/images/mobile/image-from-above.jpg" />
            <img src="/images/desktop/image-from-above.jpg" alt="From Up Above VR" />
          </picture>
          <figcaption>From Up Above VR</figcaption>
        </figure>
        <figure>
          <picture>
            <source media="(min-width: 1200px)" srcSet="/images/desktop/image-pocket-borealis.jpg" />
            <source media="(max-width: 767px)" srcSet="/images/mobile/image-pocket-borealis.jpg" />
            <img src="/images/desktop/image-pocket-borealis.jpg" alt="Pocket Borealis" />
          </picture>
          <figcaption>Pocket Borealis</figcaption>
        </figure>
        <figure>
          <picture>
            <source media="(min-width: 1200px)" srcSet="/images/desktop/image-curiosity.jpg" />
            <source media="(max-width: 767px)" srcSet="/images/mobile/image-curiosity.jpg" />
            <img src="/images/desktop/image-curiosity.jpg" alt="The Curiosity" />
          </picture>
          <figcaption>The Curiosity</figcaption>
        </figure>
        <figure>
          <picture>
            <source media="(min-width: 1200px)" srcSet="/images/desktop/image-fisheye.jpg" />
            <source media="(max-width: 767px)" srcSet="/images/mobile/image-fisheye.jpg" />
            <img src="/images/desktop/image-fisheye.jpg" alt="Make it Fisheye" />
          </picture>
          <figcaption>Make it Fisheye</figcaption>
        </figure>
        <Button>See all</Button>
      </div>
    </section>
  );
}

export default Gallary;
