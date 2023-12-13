import React from 'react'
import { useState } from 'react'


function MultiInputForm() {
    const[FormData,setFormData]=useState({Name:'',email:'',message:''})
    const handleFormChange=(e)=>{
        const{name,value}=e.target;
        setFormData((prevFormData)=>({...prevFormData,[name]:value}));
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`name:${FormData.name},email:${FormData.email},massage:${FormData.message}`);
    }


  return (
    <form  onSubmit={handleSubmit}>
    <label htmlFor="name">name:</label>
    <input type="text" id='name' name='name' value={FormData.name} onChange={handleFormChange}/>
    <label htmlFor="email">email:</label>
    <input type="text" id='email' name='email' value={FormData.email} onChange={handleFormChange}/>
    <label htmlFor="massage">massage:</label>
    <textarea name="message" id="message" value={FormData.message} onChange={handleFormChange}></textarea>
    <button type='submit'>submit</button>
    </form>
  )
}

export default MultiInputForm
