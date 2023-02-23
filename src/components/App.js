import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { Routes,Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div className="general">
        <div className="container">
          <Header/>
        </div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
