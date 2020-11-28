import Link from "next/link";
import styles from "../styles/NavBar.module.css";
import SearchBar from "../SearchBar";

export const NavBar = () => (
  <div className={styles.navbarContainer}>
    <div className={styles.navBarLogo}>
      <a href="/">
        <p>RMD</p>
      </a>
    </div>
    <SearchBar />

    <div className={styles.navBarRight}>
      <Link href="/">
        <p className={styles.navBarButton1}>Jobs</p>
      </Link>
      <Link href="/">
        <p className={styles.navBarButton1}>About</p>
      </Link>
      <Link href="/">
        <p className={styles.navBarButton1}>Login</p>
      </Link>
      <Link href="/">
        <p className={styles.navBarButton2}>Sign Up</p>
      </Link>
    </div>
  </div>
);
