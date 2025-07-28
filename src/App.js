import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <><Router>
      <Navbar />
      
        <div className="container my-5">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm heading="Enter the text to analyze" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
