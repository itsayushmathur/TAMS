import "./App.css";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import MainBody from "./components/MainBody";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App flex vflex">
      <BrowserRouter>
        <Header />
        <div className="main flex">
          <SideNav />
          <MainBody />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
