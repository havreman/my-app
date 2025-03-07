import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Aside from './components/Aside';

function App() {
  return (
    <div id="container">
      <Header/>
      <div id="wrapper">
      <Sidebar/>
      < Home  />
      < Aside />
      </div>
    </div>
  );
}

export default App;
