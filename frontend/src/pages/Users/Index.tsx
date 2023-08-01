import React, { useEffect } from "react";

import axios from "axios";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

function IndexUsers(props: any) {
  const [dataUsers, setDataUsers] = React.useState([]);

  const GetUsers = () => {
    axios
      .get("http://localhost:8080/users", {
        params: {
          role: 1,
        },
        withCredentials: false,
      })
      .then((response) => {
        console.log({ response });

        if (response.status == 200) {
          setDataUsers(response.data.users);
        }
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  useEffect(() => {
    GetUsers();
  }, []);

  const handleDelete = (e) => {
    console.log({ e });
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
              <h1>USERS</h1>
              <a href="/users/create">Add User</a>

              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Email</th>
                    <th scope="col">Fullname</th>
                    <th scope="col">Photo</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {dataUsers
                    ? dataUsers.map((user: any) => {
                        // console.log({ item });
                        return (
                          <tr key={user.id}>
                            <td>{user.email}</td>
                            <td>{user.fullname}</td>
                            <td>{user.photo}</td>
                            <th>
                              <a className="btn btn-warning btn-sm" href={`/users/edit/${user.id}`}>Edit</a>
                              <button className="btn btn-danger btn-sm" onClick={handleDelete}>Delete</button>
                            </th>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexUsers;
