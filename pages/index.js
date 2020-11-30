import { Header } from "../components/Header";
import { NavBar } from "../components/layout/NavBar";
import Main from "../components/layout/Main";
import { Footer } from "../components/layout/Footer";
import { Signup } from "../components/modals/Signup";
import { Login } from "../components/modals/Login";
import { Fragment, useEffect, useState } from "react";
// import { checkUser } from "../helpers";
import { firebase } from "../firebase";
import { Logout } from "../components/modals/Logout";
export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [isUserActive, setIsUserActive] = useState(null);
  useEffect(() => {
    console.log("loading google API");
    const script = document.createElement("script");
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBkz0CxXkXP6NQ6LJOvB6VnWYc9oiSRV3c&libraries=places";
    script.setAttribute("async", "");
    script.setAttribute("defer", "");
    window.document.body.appendChild(script);
  }, []);
  useEffect(() => {
    let unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setIsUserActive(true);
      } else {
        setIsUserActive(false);
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="container">
      <Header />
      <Logout showLogout={showLogout} setShowLogout={setShowLogout} />
      <Signup showSignup={showSignup} setShowSignup={setShowSignup} />
      <Login showLogin={showLogin} setShowLogin={setShowLogin} />
      <NavBar
        isUserActive={isUserActive}
        setShowLogin={setShowLogin}
        setShowSignup={setShowSignup}
        setShowLogout={setShowLogout}
      />
      <Main
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        showSignup={showSignup}
        setShowSignup={setShowSignup}
      />
      <Footer />
      <Styles />
    </div>
  );
}

export const Styles = () => (
  <Fragment>
    <style jsx>{`
      .container {<div>under Maintenance</div>;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #f8f9fa;
      }
    `}</style>
    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </Fragment>
);
