import "./App.css"
import MainContainer from "./component/MainContainer/MainContainer";
import { Routes, Route } from "react-router-dom"
import About from "./component/About/About";
import Project from "./component/Project/Project";
import Social from "./component/Social/Social";
import Contact from "./component/Contact/Contact";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainContainer/>} exact ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route  path="/project" element={<Project/>} ></Route>
        <Route  path="/contact" element={<Contact/>} ></Route>
        <Route  path="/socialprofiles" element={<Social/>} ></Route>
      </Routes>
</>

  );
}

export default App;
