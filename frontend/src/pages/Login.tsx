import React, { useEffect } from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import axios from "axios";

function Login(props: any) {

  const [dataEmail, setDataEmail] = useState();
  const [dataPassword, setDataPassword] = useState();
  const DoLogin = () => {
    axios
      .post("http://localhost:5137/login", {
        params: {
          email: dataEmail,
          password: dataPassword,
        },
      })
      .then((response) => {
        if (response.status == 200) {
          //
        }
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  useEffect(() => {
    DoLogin();
  }, []);

  return (
    <>
      <main className="form-signin">
        <form>
          <img
            className="mb-4"
            src="/docs/5.0/assets/brand/bootstrap-logo.svg"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e) => setDataPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
        </form>
      </main>
    </>
  );
}

export default Login;
