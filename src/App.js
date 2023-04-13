import "./App.css";
import Navber from "./components/Navber";
import Page from "./components/MainPage";
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about";
import Contact from "./components/Contact";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navber />
        <Routes>
          <Route path="/" element={<Page/>} />
          <Route path="/home" element={<Page/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
