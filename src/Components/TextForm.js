import React, { useState } from 'react'
import { Document, Packer, Paragraph } from 'docx'
import { saveAs } from 'file-saver'


export default function TextForm(props) {
  const [text, setText] = useState('Enter the text here');

  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }
   const handleOnChange = (event)=>{
    setText(event.target.value);

  }
   const handleSpace = ()=>{
    const cleaned = text.replace(/ {2,}/g, " ").trim();
    setText(cleaned)
  }

   const handleSentenceCase= ()=>{
    const converted = text.toLocaleLowerCase()
    .replace(/(^\s*\w|[.!?]\s*\w)/g, (match) => match.toUpperCase());
    setText(converted)
    
  }
   const handleClearText= ()=>{
    setText('')
  }

  const handleExportDocx = async () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [new Paragraph(text)],
        },
      ],
    });
    const blob = await Packer.toBlob(doc);
    saveAs(blob, "exported-text.docx");
  };

  
  return (
    <div className="container-fluid px-2">
      <h1 className="mt-3 mb-3 text-center">{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="my-box" className="form-label">
          <h4>Text Area</h4>
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="my-box"
          rows="10"
          style={{ fontSize: "1rem" }}
        ></textarea>
      </div>
      <div className="d-flex flex-wrap gap-2 mb-3">
        <button className="btn btn-primary flex-fill" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary flex-fill" onClick={handleLoClick}>Convert To Lowercase</button>
        <button className="btn btn-primary flex-fill" onClick={handleSpace}>Remove Space</button>
        <button className="btn btn-primary flex-fill" onClick={handleSentenceCase}>Sentence Case</button>
        <button className="btn btn-primary flex-fill" onClick={handleClearText}>Clear Text</button>
        <button className="btn btn-primary flex-fill" onClick={handleExportDocx}>Export as .docx</button>
      </div>
      <div className="container-fluid my-3">
        <h1 className="h4">Your text summary</h1>
        <p style={{ wordBreak: "break-word" }}>
          {
            text.trim().length === 0
              ? 0
              : text.trim().split(/\s+/).filter(Boolean).length
          } Words&nbsp;
          {
            text.replace(/\s/g, '').length
          } Characters 
        </p>
      </div>
    </div>
  )
 
}