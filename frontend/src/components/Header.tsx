/* eslint-disable @typescript-eslint/no-explicit-any */
function Header() {
  return (
    <>
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              Lyrid
            </a>

            {/* <div className="col-md-12"> */}
              {/* <div className="text-end">
                <button type="button" className="btn btn-outline-light me-2">
                  Login
                </button>
                <button type="button" className="btn btn-warning">
                  Sign-up
                </button>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
