import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginUser } from "../../helpers";

export const Login = ({ showLogin, setShowLogin }) => {
  function onKeyDown(keyEvent) {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  }
  return (
    <div className="container">
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          //need to stop

          loginUser({ email: values.email, password: values.password });
          setSubmitting(false);
          resetForm({ values: { email: "", password: "" } });
          setShowLogin((s) => !s);
        }}
      >
        {({ isSubmitting }) => (
          <Form onKeyDown={onKeyDown}>
            <div className="div-container">
              <button
                onClick={() => setShowLogin((s) => !s)}
                className="close-modal"
              >
                X
              </button>
              <h1 className="container-title">Login</h1>

              <label className="label-text">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage
                name="email"
                render={(msg) => <p className="alert">{msg}</p>}
              />
              <label className="label-text">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage
                name="password"
                render={(msg) => <p className="alert">{msg}</p>}
              />
              <button
                className="submit-btn"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
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
            display: ${showLogin ? "flex" : "none"};
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
