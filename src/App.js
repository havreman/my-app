import "./styles/Main.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Aside from "./components/Aside";
import Home from './pages/Home';
import Barnvagnsbio from "./pages/Barnvagnsbio";
import Omoss from "./pages/Omoss";
import Biljetter from "./pages/Biljetter";
import Film from "./pages/Film";


function App() {
  return (
    <div className = "container" >
    <Router >
      <Header/>
      <div className ="wrapper">
      <Sidebar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Barnvagnsbio" element={<Barnvagnsbio />} />
          <Route path="/Omoss" element={<Omoss />} />
          <Route path="/Biljetter" element={<Biljetter />} />
          <Route path="/Film" element={<Film />} />
        </Routes>
      < Aside />
      </div>
    </Router>
    </div>
  );
}

export default App;
