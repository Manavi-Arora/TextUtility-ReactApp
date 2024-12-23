import React, { useState } from "react";

export default function TextArea(props) {
  const HandleOnchange = (event) =>{
    console.log("on change clicked");
    setText(event.target.value)
  }
  const HandleUpClick = () =>{
    console.log("Button clicked");
    setText(text.toUpperCase());
  }

  const HandleLoClick = () =>{
    setText(text.toLowerCase());
  }
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text); 
  };

  const HandleClrClick = () =>{
    setText("");
  }
  const [text, setText] = useState("")
 // setText("New text");
  return (
    <>
      <div className="mb-3" style={{color : props.mode === 'dark'?"white":"black"}}>
        <h2>{props.heading}</h2>
        <textarea
          style={{backgroundColor : props.mode === 'dark'?"#d5f5ff":"#e3e3e3"}}
          value = {text}
          onChange={HandleOnchange}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          columns = "5"
        ></textarea>
        <button className="btn btn-primary my-2 mx-2" onClick={HandleUpClick}>Capitalize the text</button>  
        <button className="btn btn-primary my-2 " onClick={HandleLoClick}>Cursive the text</button>  
        <button className="btn btn-primary my-2 mx-2" onClick={HandleClrClick}>Clear the text</button>  
        <button className="btn btn-primary my-2" onClick={copyToClipboard}>Copy the text</button>  
        <div className="container">
          <h2>Text Analysis</h2>
          <p><b>Words: </b>{text.length>0 ?text.split(" ").length:0} <b>Characters: </b>{text.length} <b>Read In : </b>{text.length>0 ? 0.008 * text.split(" ").length : "0.000"} minutes</p>
          <h2>Text Preview</h2>
          <p>{text.length > 0 ?text:"Enter text to preview"}</p>
        </div>
      </div>
    </>
  );
}
