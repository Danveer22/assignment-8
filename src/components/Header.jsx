import { useState } from "react";
import styles from "./Header.module.css";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={styles.header}>
      <img src="/images/logo.svg" className={styles.logo} />

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
      <span
        className={styles.toggleIcon}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        {isOpen ? (
          <svg
            width="35"
            height="35"
            viewBox="0 0 28 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
              fill="#FFF"
              fillRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            width="35"
            height="35"
            viewBox="0 0 28 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#FFF" fillRule="evenodd">
              <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
            </g>
          </svg>
        )}
      </span>
    </header>
  );
}

export default Header;
