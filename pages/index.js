import { Header } from "../components/Header";
import { NavBar } from "../components/layout/NavBar";
import Main from "../components/layout/Main";
import { Footer } from "../components/layout/Footer";
export default function Home() {
  return (
    <div className="container">
      <Header />
      {/* <NavBar /> */}
      <Main />
      <Footer />

      <style jsx>{`
        .container {
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
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
