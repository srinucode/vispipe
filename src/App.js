import logo from './logo.svg';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Routes, Route, NavLink, Link } from 'react-router-dom';
import Home from './pages/vis1';
import VIS1 from './pages/vis1';
import VIS2 from './pages/vis2';
import VIS3 from './pages/vis3';
import VIS4 from './pages/vis4';

function App() {






  return (
    <div className="App">
      <div class="container">

        <nav class="p-2 navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
          <Link class="navbar-brand" to="/vis1">PipeLining APP</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">

              <li class="nav-item ">
                <Link class="nav-link" to="/vis1">No Dependency </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/vis2">Structural Dependency</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/vis3">Data Dependency</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/vis4">Control Dependency</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<VIS1 />} />
        <Route path="/vis1" element={<VIS1 />} />
        <Route path="/vis2" element={<VIS2 />} />
        <Route path="/vis3" element={<VIS3 />} />
        <Route path="/vis4" element={<VIS4 />} />
      </Routes>

    </div>
  );
}

export default App;
