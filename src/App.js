import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (type, message) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#060648";
      showalert("success", "Dark mode has been enabled");
      document.title = "TextUtiles - Light";
    } else {
      setmode("light");
      document.body.style.backgroundColor = " white";
      showalert("success", "Light mode has been enabled");
      document.title = "TextUtiles - Dark";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          home="Home"
          about="About"
          contact="Contact Me"
          mode={mode}
          toggle={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            {/* Correct usage of element prop in Route */}
            <Route path="/about" element={<About/>} />
            <Route
              path="/"
              element={<TextArea heading="Enter the text to analyze" mode={mode} showalert={showalert} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
