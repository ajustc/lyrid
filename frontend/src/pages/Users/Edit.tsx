import React, { useEffect } from "react";

import axios from "axios";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

import { redirect, useParams } from "react-router-dom";

function EditUsers() {
  const params = useParams();

  const [dataFullname, setDataFullname] = React.useState("");
  const [dataEmail, setDataEmail] = React.useState("");
  const [dataPassword, setDataPassword] = React.useState("");
  const [dataPhoto, setDataPhoto] = React.useState();

  const GetUser = (props: any) => {
    axios
      .get("http://localhost:8080/users/" + params.id, {
        withCredentials: false,
      })
      .then((response) => {
        console.log({ response });

        if (response.status == 200) {
          setDataFullname(response.data.fullname);
          setDataEmail(response.data.email);
          setDataPhoto(response.data.photo);
        }
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  useEffect(() => {
    GetUser();
  }, []);

  const handleEdit = () => {
    console.log({dataPhoto});
    
    const payload = new FormData();
    payload.append("fullname", dataFullname);
    payload.append("email", dataEmail);
    payload.append("password", dataPassword);
    payload.append("photo", dataPhoto);
    payload.append("role", "1");

    axios
      .post("http://localhost:8080/users/" + params.id, payload, {
        withCredentials: false,
      })
      .then((response) => {
        if (response.status == 200) {
          redirect('/users')
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
              <h1>EDIT USER</h1>

              <div>
                <div className="mb-3">
                  <label htmlFor="exampleInputFullname1" className="form-label">
                    Fullname
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputFullname1"
                    value={dataFullname}
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
                    value={dataEmail}
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
                <div className="mb-3">
                  <label htmlFor="exampleInputPhoto1" className="form-label">
                    Photo
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="exampleInputPhoto1"
                    onChange={(e) => {
                      console.log({photo: e.target.files[0]});
                      
                      setDataPhoto(e.target.files[0])
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => handleEdit()}
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

export default EditUsers;
