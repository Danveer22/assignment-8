import styles from "./Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.companyLinks}>
        <img
          src="/images/logo.svg"
          className={styles.logo}
          alt="Company Logo"
        />
        <nav>
          <ul className={styles.navList}>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.sociaLinks}>
        <ul className={styles.socialMediaList}>
          <li>
            <a href="#">
              <img src="/images/icon-facebook.svg" alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/images/icon-twitter.svg" alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/images/icon-pinterest.svg" alt="Pinterest" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/images/icon-instagram.svg" alt="Instagram" />
            </a>
          </li>
        </ul>
        <p className={styles.copyright}>
          &copy; {currentYear} Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
