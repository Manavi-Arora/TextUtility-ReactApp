import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
//import TextForm from './components/TextForm';
import TextArea from './components/TextArea';
// import About from './components/About';

function App() {
  const [mode,setmode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = "#060648";
    }
    else{
      setmode('light');
      document.body.style.backgroundColor =" white";
    }
  }
  return (
    <>
      <Navbar title ="TextUtils" home="Home" about ="About" contact ="Contact Me" mode = {mode} toggle = {toggleMode}/>    {/* Navbar Component imported externally */}

      {/* <div className="App">
       This is my React App with Bootstrap CSS and JS linked in index.html
      </div> */}
      
      <div className="container">
      <TextArea heading="Enter the text to analyze"  mode = {mode}/> 
      </div>

      <div className="container">
      {/* <TextForm email="Email Address" text="We'll never share your email with anyone else" pass ="Password" checkbox = "Check me out" submit = "Submit" /> */}
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
