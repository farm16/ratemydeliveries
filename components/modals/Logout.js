import { firebase } from "../../firebase";

export const Logout = ({ showLogout, setShowLogout }) => {
  const handleSubmit = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setShowLogout((s) => !s);
        console.log("user signout");
      })
      .catch((error) => console.log("error signingout user", error));
  };
  return (
    <div className="container">
      <div className="div-container">
        <button
          onClick={() => setShowLogout((s) => !s)}
          className="close-modal"
        >
          X
        </button>
        <h3 className="label-text">Are you sure?</h3>
        <button className="submit-btn" onClick={handleSubmit}>
          Yes
        </button>
      </div>
      <style jsx>
        {`
          .container {
            height: 100vh;
            width: 100vw;
            background-color: rgba(59, 62, 61, 0.77);
            position: fixed;
            overflow-y: scroll;
            top: 0;
            z-index: 100;
            display: ${showLogout ? "flex" : "none"};
            justify-content: center;
            align-items: center;
          }
          .container-title {
            margin: 10px;
          }
          .close-modal {
            border: none;
            background-color: #fff;
            position: absolute;
            right: 0;
            top: 0;
            margin: 10px;
          }
          .alert {
            font-size: 12px;
            color: red;
          }
          .div-container {
            position: relative;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #fff;
            padding: 30px;
            border-radius: 4px;
          }
          .label-text {
            margin: 10px 0px;
          }
          .field-text {
            margin-bottom: 10px;
          }
          .submit-btn {
            margin-top: 15px;
            background-color: #56e8a1;
            border-width: 0px;
            border-radius: 5px;
            font-size: 18px;
            padding: 5px 10px;
            color: #fff;
            letter-spacing: 1px;
          }
        `}
      </style>
    </div>
  );
};
