import "./App.css";
import Navbar from './Components/Navbar'
import Form from "./Components/Form";
import { useState } from "react";
import Alert from "./Components/Alert";
import DarkMode from "./Components/DarkMode";
import {BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

const [Mode, setMode] = useState("dark");
const [Yalert, setAlert] = useState(null);

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null)
  },1500)
}

const changeBackground = () =>{
  if(Mode === "dark"){
    setMode("light")
    document.body.style.backgroundColor = "gray"
    showAlert("Have a dark Mode" , "success")
  }
  else{
    setMode("dark")
    document.body.style.backgroundColor = "white"
    showAlert("Have a light Mode" , "success") 
  }
}

const greenModeColor = () => {
  if(Mode === "dark"){
    setMode("light")
    document.body.style.backgroundColor = "green"
    showAlert("Have a dark Mode" , "success")
  }
  else{
    setMode("dark")
    document.body.style.backgroundColor = "white"
    showAlert("Have a light Mode" , "success") 
  }
}

  function redModeColor() {
    
  if(Mode === "dark"){
    setMode("light")
    document.body.style.backgroundColor = "red"
    showAlert("Have a dark Mode" , "success")
  }
  else{
    setMode("dark")
    document.body.style.backgroundColor = "white"
    showAlert("Have a light Mode" , "success") 
  }
  }

  return (
      <>
      <BrowserRouter>
      <Navbar title="TextUtils" about="About" mode={Mode} clickHere={changeBackground} greenMode={greenModeColor} REDCOLOR={redModeColor}/>
      <Alert alert={Yalert} />
      
    <Routes>
      <Route path="/" element={<Form mode={Mode} alertLower={showAlert}/>} />
        <Route path="/about" element={<DarkMode />}/>
    </Routes>
      </BrowserRouter>
      </>

  );
}

export default App;
