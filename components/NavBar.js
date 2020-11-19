import Link from "next/link";
import styles from "./styles/NavBar.module.css";
import SearchBar from "./SearchBar";
export default function NavBar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navBarLogo}>
        <Link href="/">
          <p>RMD</p>
        </Link>
      </div>
      <SearchBar />
      <div className={styles.navBarRight}>
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
}
