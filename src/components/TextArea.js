import React, { useState } from "react";

export default function TextArea(props) {
  const withoutSpace = (str)=>{
    return str.split(/\s+/).join('').length;
  }
  const HandleOnchange = (event) =>{
    console.log("on change clicked");
    setText(event.target.value)
  }

  // const RemoveExtraSpaces = (text) => {
  //   // Replace multiple spaces with a single space
  //   setText(text.replace(/\s+/g, ' ').trim());
  // };
  
  
  const RemoveExtraSpaces = () => {
    // Split the string by spaces, filter out empty strings, and join back with a single space
    setText(text.split(/\s+/).filter((e)=>e.length !== 0).join(' ').trim());
    props.showalert("success","Extra spaces removed successfully!")
  };
  
  const HandleUpClick = () =>{
    //console.log("Button clicked");
    setText(text.toUpperCase());
    props.showalert("success","Text sucessfully changes to Uppercase!")
  }

  const HandleLoClick = () =>{
    setText(text.toLowerCase());
    props.showalert("success","Text sucessfully changes to Lowercase!")
  }
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text); 
    props.showalert("success","Text sucessfully copied to clipboard!")
  };

  const HandleClrClick = () =>{
    setText("");
    props.showalert("success","Text sucessfully cleared!")
  }
  const [text, setText] = useState("")
 // setText("New text");
  return (
    <>
      <div className="mb-3" style={{color : props.mode === 'dark'?"white":"black"}}>
        <h2 className="mt-3">{props.heading}</h2>
        <textarea
          style={{backgroundColor : props.mode === 'dark'?"#d5f5ff":"#e3e3e3"}}
          value = {text}
          onChange={HandleOnchange}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          columns = "5"
        ></textarea>
        <button className="btn btn-primary my-2 mx-2" disabled={text.length === 0} onClick={HandleUpClick}>Capitalize the text</button>  
        <button className="btn btn-primary my-2 " disabled={text.length === 0} onClick={HandleLoClick}>Cursive the text</button>  
        <button className="btn btn-primary my-2 mx-2" disabled={text.length === 0} onClick={HandleClrClick}>Clear the text</button>  
        <button className="btn btn-primary my-2"disabled={text.length === 0}  onClick={copyToClipboard}>Copy the text</button>  
        <button className="btn btn-primary my-2 mx-2" disabled={text.length === 0} onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>  
        <div className="container">
          <h3>Text Analysis</h3>
          <p><b>Words: </b>{text.split(/\s+/).filter((e)=>{return e.length !==0}).length} <b>Characters with spaces: </b>{text.length} <b>Characters without spaces: </b>{withoutSpace(text)}  <b>Read In : </b>{(0.008 * text.split(/\s+/).filter((e)=>{return e.length !==0}).length).toFixed(4)} minutes</p>
          <h3>Text Preview</h3>
          <p>{text.length > 0 ?text:"Enter text to preview"}</p>
        </div>
      </div>
    </>
  );
}
