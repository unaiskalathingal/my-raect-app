import {useState} from 'react'

function CntlForm() {
    const [inputValue,setinputValue]=useState("")
    const handleChange=(e)=>{
        setinputValue(e.target.value);
    }

   const [selectoption,setselectoption]=useState("calicut")
   const change=(e)=>{
        setselectoption(e.target.value)
        
    }
    const [isChceked,setisChceked]=useState(false)
    const hChange=(e)=>{

    setisChceked(e.target.value)
    }

    const [selectHobby,setmyHobby]=useState("")
    const handleHobbyChange=(e)=>{
        setmyHobby(e.target.value)
    }







  return (
    
      <form action="">
       <label htmlFor="">input value:
            <input type="text" value={inputValue} onChange={handleChange}/>
     </label>
       <p>inputvalue:{inputValue}</p>
       <label> select distict: 
      <select name="" value={selectoption} onChange={change} id="">
      <option value="calicut">calicut</option>
      <option value="malappuram">malappuram</option>
      <option value="palakad">palakkad</option>
      
      </select>
      <p>selected option:{selectoption}</p>
       </label>
       <label htmlFor="color">
       <input type="checkbox"  checked={isChceked} onChange={hChange} /> blue
       
       </label>

      {isChceked && <div>blue is selected</div>}
      <br />
      <br />
    

      <label htmlFor="" value={selectHobby} onChange={handleHobbyChange}> <h2>what is your hobby</h2> 
      
       <input type="radio" name="your hobby" value="playing football" />playing football<br />
       <input type="radio" name="your hobby" value="swimming" />swimming <br />
       <input type="radio" name="your hobby" value="watching movies" />watching movies
     
      </label>
      <p>your hobby is: {selectHobby}</p>

      </form>
    
  )
}

export default CntlForm
