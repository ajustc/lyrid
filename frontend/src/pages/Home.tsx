import React, { useEffect } from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import axios from "axios";

function Home(props: any) {
  const [article, setArticle] = React.useState([]);

  const GetArticle = () => {
    axios
      .get("http://localhost:2020/api/article", {
        params: {
          page: 1,
          limit: 10,
          capikey: "tempobased",
        },
      })
      .then((response) => {
        if (response.status == 200) {
          setArticle(response.data.data);
        }
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  useEffect(() => {
    GetArticle();
  }, []);

  return (
    <>
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 p-0">
              <Sidebar />
            </div>
            <div className="col-md-9">
              {/* Main content goes here */}
              <h1>HOME</h1>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Home;
