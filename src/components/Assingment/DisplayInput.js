import {useState} from 'react';

function DisplayInput(){
    const [message,setMessage]=useState('');

    const [updated,setUpdated]=useState(message);

const handleChange=(event)=>{setMessage(event.target.value);}

const handleClick=()=>{
  //"message" stores input field value
  setUpdated(message);}
  
  return(<div>

    <input type="text" id='message' name='message' onChange={handleChange}/>
    <h2>message :{message}</h2>
    <h2>updated :{updated}</h2>
    

  <button onClick={handleClick}>Update</button></div>)}
  
export default DisplayInput;