import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import Home from "./pages/Home";

import IndexUsers from "./pages/Users/Index";
import CreateUsers from "./pages/Users/Create";
import EditUsers from "./pages/Users/Edit";

import IndexEmployee from "./pages/Employee/Index";
import CreateEmployee from "./pages/Employee/Create";
import EditEmployee from "./pages/Employee/Edit";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/users" element={<IndexUsers />} />
          <Route path="/users/create" element={<CreateUsers />} />
          <Route path="/users/edit/:id" element={<EditUsers />} />

          <Route path="/employee" element={<IndexEmployee />} />
          <Route path="/employee/create" element={<CreateEmployee />} />
          <Route path="/employee/edit/:id" element={<EditEmployee />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
