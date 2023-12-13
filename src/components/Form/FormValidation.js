import React, { useState } from 'react'

function FormValidation() {
  const [inputValue,setinputValue]=useState("")
  const [inputError,setinputError]=useState(null)
  const handleInputChange =(e)=>{
    const value=e.target.value;
    setinputValue(value);
    if(value.length<5){
      setinputError("input value atleast 5 ctctr ")
    }
    else{
      setinputError(null)

    }
    }
    const handleSubmit = (e)=>{
      e.preventDefault();
    if(inputValue.length>=5){
      alert("submited ")
    }
    else{
      setinputError("input atleast 5ctcr ")
      alert("input atleast 5ctcr ")
    }
  }
  
  return (
    <form onSubmit={handleSubmit} >
      <label htmlFor="">fruit <input type="text" value={inputValue} onChange={handleInputChange} /></label>
      {inputError && <div style={{color:"red"}}>{inputError}</div>}
      
      <button type='submit'>submit</button>
    </form>
  )
}

export default FormValidation
