import { BrowserRouter, Routes, Route} from "react-router-dom";

import AddStudentstoMentor from "./pages/AddStudenttoMentor.jsx";
import AllStudentsforEachMentor from "./pages/AllStudentstoMentor.jsx";
import ChangeMentorforStudent from "./pages/ChangeMentorforStudent.jsx";
import NewMentor from "./pages/NewMentor.jsx";
import NewStudent from "./pages/NewStudent.jsx";
import ListAll from "./pages/ListAll.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Home
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end text-bg-dark"
              tabIndex="-1"
              id="offcanvasDarkNavbar"
              aria-labelledby="offcanvasDarkNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                  Options
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  
                  <li className="nav-item">
                    <a className="nav-link" href="/NewMentor">
                      Create new Mentor
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/NewStudent">
                      Create new Student
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/AddStudentstoMentor">
                      Add Students to Mentor
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/ChangeMentorforStudent">
                      Change Mentor for student
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/AllStudentsforEachMentor">
                      Get all Students for Particular Mentor
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        {/* <nav
          className="navbar bg-dark border-bottom border-body"
          data-bs-theme="dark"
        > 
        
          <ul>
             <li>
              <Link to="/">HomePage</Link>
            </li>
            <li>
              <Link to=""></Link>
            </li>
            <li>
              <Link to=""> </Link>
            </li>
            <li>
              <Link to=""></Link>
            </li>
            <li>
              <Link to="">
                
              </Link>
            </li>
            <li>
              <Link to="">
                
              </Link>
            </li>
          </ul>
         </nav> */}

        <hr />

        <Routes>
          <Route path="/NewStudent" element={<NewStudent />} />

          <Route path="/NewMentor" element={<NewMentor />} />

          <Route
            path="/ChangeMentorforStudent"
            element={<ChangeMentorforStudent />}
          />
          <Route
            path="/AddStudentstoMentor"
            element={<AddStudentstoMentor />}
          />

          <Route
            path="/AllStudentsforEachMentor"
            element={<AllStudentsforEachMentor />}
          />

          <Route path="/" element={<ListAll />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
