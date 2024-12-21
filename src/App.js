import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
import TextArea from './components/TextArea';


function App() {
  return (
    <>
      <Navbar title ="My Navbar" home="Home" about ="About" contact ="Contact Me" />    {/* Navbar Component imported externally */}

      <div className="App">
       This is my React App with Bootstrap CSS and JS linked in index.html
      </div>
      
      <div className="container">
      <TextArea heading="Enter the text to analyze"/>
      <button className="btn btn-primary">Capitalize the text</button>   
      </div>

      <div className="container">
      <TextForm email="Email Address" text="We'll never share your email with anyone else" pass ="Password" checkbox = "Check me out" submit = "Submit" />
      </div>
    </>
  );
}

export default App;
