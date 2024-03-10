import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import Footer from "./Components/Footer";
import Design from "./Components/Design";
// this is a code for app
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState("Hi");
  const [heading, setHeading] = useState("Enter Your Text Here");
  const showHeading = () => {
    if (mode === "dark") {
      setHeading("white");
    }
  };
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "Enable Light Mode") {
      setmode("dark");
      document.body.style.backgroundColor = "white";
      
      showAlert("Light Mode is Enabled", "success");
      document.title = "My App- Light Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "#113852";
      showAlert("Dark Mode is Enabled", "success");
      document.title = "My App-Dark Mode";
    }
  };
  return (
    <>
     
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        

        <Alert alert={alert}></Alert>
        
        <Design></Design>
          
          <TextForm showAlert={showAlert} heading={heading} mode={mode} />
         
        {<div className="container my-4"></div>}
     
      <About mode={mode} />
      <Footer></Footer>
    </>
  );
}

export default App;
