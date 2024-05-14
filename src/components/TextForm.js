import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");

  }
  const handleUpdateText = (event) =>{
    setText(event.target.value);

    
  }
  const handleLowClick =() =>{
    let newText= text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");

  }
  
  const handleClearClick =() =>{
    let newText= ('');
    setText(newText);
    props.showAlert("Text Area Cleared","success");


  }
  const handleExtraSpaces =() =>
  {let newText= text.replace(/\s+/g, ' ').trim();
  setText(newText);
  props.showAlert("Extra Spaces Removed","success");
  }
  const [text, setText] = useState('enter text here');
  return (
    <>
    <div>
      <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
      <div className="mb-3">

        <textarea className="form-control"style={{backgroundColor:props.mode==='dark'?'grey':'white',color: props.mode==='light'?'black':'white'}}value={text} id="myBox" rows="8" onChange={handleUpdateText}></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-1" type="submit" onClick={handleUpClick}>Convert To Uppercase</button>
      <button className="btn btn-primary mx-2 my-1" type="submit" onClick={handleLowClick}>Convert To Lowercase</button>
      <button className="btn btn-primary mx-2 my-1" type="submit" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2 my-1" type="submit"  onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div>
      <h2 className={`my-3 mx-2 text-${props.mode==='light'?'dark':'light'}`}>Your Text Summary</h2>
      <p className={`mx-2 text-${props.mode==='light'?'dark':'light'}`}>{text.split(" ").length} words and {text.length} characters</p>

    </div>
    </>
  )
}
