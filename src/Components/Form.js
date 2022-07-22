import React, { useState } from 'react'

const Form = (props) => {

    const [text , setText] = useState("")

    function upperCase(){
        setText(text.toUpperCase());
        props.alertLower("Converted to UpperCase", "success")
    }

    
    function lowerCase(){
        setText(text.toLowerCase());
        props.alertLower("Converted to LowerCase", "success")
    }

    function ReverseString(){
       setText(text.split('').reverse().join(''))
       props.alertLower("Converted to ReverseCase", "warning")
    }

    function Reset(){
         let resetText = '';
         setText(resetText);
        props.alertLower("Converted to ResetCase", "danger")
    }

    const handleInput = (e) => {
        setText(e.target.value);
    }


  return (
    <>
    <div className='container my-3' style={{color:props.mode==="dark"?"black":"white"}}>
        <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Text To Analyze Below</label>
  <textarea className="form-control" value={text} onChange={handleInput} id="exampleFormControlTextarea1" rows="7" style={{backgroundColor:props.mode==="dark"?"white":"gray",color:props.mode==="dark"?"black":"white"}}></textarea>
     <button className='my-2 btn btn-danger mx-1' onClick={upperCase}>Upper </button>
     <button className='my-2 btn btn-danger mx-1' onClick={lowerCase}>Lower </button>
     <button className='my-2 btn btn-danger mx-1' onClick={ReverseString}>Reverse </button>
     <button className='my-2 btn btn-danger mx-1' onClick={Reset}>Reset</button>
</div>
    </div>

    <div className="container" style={{color:props.mode==="dark"?"black":"white"}}>
        <h2>Text Summary</h2>
        <p>{text.split(" ").length-1} Words and {text.length} Characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Text Here"}</p>
    </div>
    </>
  )
}

export default Form