import React from "react";

export default function About(props) {
  
  return (
    <div className="container my-2">
      <h1 style={{color : props.mode === 'light'?'black':'white'}}>About Page</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>What is TextUtility?</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              TextUtility is a web-based text manipulation tool built with React
              that offers a set of practical features to clean, format, and
              transform text. With a simple, user-friendly interface, you can
              quickly perform common tasks like removing extra spaces,
              converting text between uppercase and lowercase, and copying text
              to your clipboard—all without the need for complex software.
              <strong>
                <ul>
                  <li>
                    <strong>Remove Extra Spaces: </strong>Automatically removes
                    unwanted spaces from your text, including leading, trailing,
                    and multiple consecutive spaces. This feature ensures your
                    text is neat and consistent.
                  </li>

                  <li>
                    <strong>Convert Text to Uppercase/Lowercase: </strong>Need
                    your text in all caps or lowercase? TextUtility allows you
                    to easily convert any text to uppercase or lowercase with a
                    single click.
                  </li>

                  <li>
                    <strong>Copy to Clipboard: </strong>Quickly copy your
                    transformed text with just one click, saving you time and
                    eliminating the hassle of manual copying.
                  </li>
                </ul>
              </strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>How It Works</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              TextUtility is powered by React, providing a smooth and responsive
              user experience. Simply paste or type your text into the provided
              text box, choose your desired action (remove spaces, convert case,
              or copy text), and let the app do the rest!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Why Use TextUtility?</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              In today's fast-paced digital world, text editing tools that save
              time and enhance productivity are essential. TextUtility helps
              streamline your writing and editing process by providing a simple,
              no-frills solution for common text transformations. Whether you're
              cleaning up an article, standardizing code comments, or preparing
              notes for a presentation, this tool makes text management fast and
              hassle-free.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
