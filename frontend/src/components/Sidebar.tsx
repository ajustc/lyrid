
function Sidebar() {

  return (
    <>
      <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: "280px", height: "1000px" }}>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="/" className="nav-link text-white" aria-current="page">
              <svg className="bi me-2" width="16" height="16">
                </svg>
              Home
            </a>
          </li>
          <li>
            <a href="/users" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
                </svg>
              Users
            </a>
          </li>
          <li>
            <a href="/employee" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
                </svg>
              Employee
            </a>
          </li>
        </ul>
        <hr/>
      </div>
    </>
  );
}

export default Sidebar;
