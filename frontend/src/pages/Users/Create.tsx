import React, { useEffect } from "react";

import axios from "axios";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { redirect } from "react-router-dom";

function CreateUsers(props: any) {
  const [dataFullname, setDataFullname] = React.useState("");
  const [dataEmail, setDataEmail] = React.useState("");
  const [dataPassword, setDataPassword] = React.useState("");

  const handleCreate = () => {
    const payload = new FormData();
    payload.append("fullname", dataFullname);
    payload.append("email", dataEmail);
    payload.append("password", dataPassword);
    payload.append("role", "1");

    axios
      .post("http://localhost:8080/users", payload, {
        withCredentials: false,
      })
      .then((response) => {
        if (response.status == 200) {
          redirect("/users");
        }
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  return (
    <>
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 p-0">
              <Sidebar />
            </div>
            <div className="col-md-9 mt-5">
              {/* Main content goes here */}
              <h1>CREATE USER</h1>

              <div>
                <div className="mb-3">
                  <label htmlFor="exampleInputFullname1" className="form-label">
                    Fullname
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputFullname1"
                    onChange={(e) => setDataFullname(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    onChange={(e) => setDataEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    onChange={(e) => setDataPassword(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => handleCreate()}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateUsers;
