import styles from "../styles/Footer.module.css";
import { Icon } from "@blueprintjs/core";
export const Footer = () => (
  <footer className={styles.footerContainer}>
    <p>
      Built with passion <Icon icon="heart" color="#d44" /> by Christopher
      Fajardo
    </p>
  </footer>
);
