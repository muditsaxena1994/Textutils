import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { Routes,Route } from 'react-router-dom';


function App() {
  const[mode,setMode]= useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = ()=>{
    if(mode ==='light')
    {
    setMode('dark');
    document.body.style.backgroundColor="#042743";
    showAlert("dark mode activated","success");
  }
  
  else{
    setMode('light');
    document.body.style.backgroundColor="white";
    showAlert("light mode activated","success");
  }
  
}
  return (
    
 <>
 
<Navbar mode={mode} toggleMode={toggleMode}></Navbar>
<Alert alert={alert}></Alert>
<div className="container my-3">
<TextForm showAlert={showAlert} heading="Enter the Text To Analyze"mode={mode} ></TextForm>
</div>
<div>
<About></About>
</div>



</>
  );
}

export default App;
