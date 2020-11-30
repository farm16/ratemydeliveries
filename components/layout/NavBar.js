import Link from "next/link";
import { Fragment } from "react";
import styles from "../styles/NavBar.module.css";

// import SearchBar from "../SearchBar";

export const NavBar = ({
  isUserActive,
  setShowLogin,
  setShowSignup,
  setShowLogout,
}) => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navBarLogo}>
        <a href="/">
          <p>RMD</p>
        </a>
      </div>
      {/* <SearchBar /> */}
      <div className={styles.navBarRight}>
        <Link href="/">
          <p className={styles.navBarButton1}>Jobs</p>
        </Link>
        <Link href="/">
          <p className={styles.navBarButton1}>About</p>
        </Link>
        {isUserActive ? (
          <p
            onClick={() => {
              setShowLogout((s) => !s);
            }}
            className={styles.navBarButton1}
          >
            Logout
          </p>
        ) : (
          <Fragment>
            {" "}
            <p
              onClick={() => {
                setShowLogin((s) => !s);
              }}
              className={styles.navBarButton1}
            >
              Login
            </p>
            <p
              onClick={() => {
                setShowSignup((s) => !s);
              }}
              className={styles.navBarButton2}
            >
              Sign Up
            </p>
          </Fragment>
        )}
      </div>
    </div>
  );
};
