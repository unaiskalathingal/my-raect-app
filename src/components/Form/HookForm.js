import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
//import { Validator } from 'validator'

function HookForm() {
  const {register,handleSubmit,formstate:{errors}}=useForm();
  const [errorMessage,seterrorMessage]=useState('')
  const validate = (value)=>{
    
    if (validate.isStorngPassword(value,{
        minLength:8,minLowerCase:1,
        MinUpperCase:1,MinNumber:1,MinSybols:1
      })){
        seterrorMessage('it is strong password')
      }
      else{
        seterrorMessage('it not storng password')
      }
    }
    const onsubmit=(data)=>{console.log(data)};
  

return (
    <form onsubmit={handleSubmit(onsubmit)}>
    <label>Email</label>
    <input type="email" {...register('email',{require:true,pattern:/^\s+@\S+$/i})} />
    {errors.email&&<p>email is required </p>}
    <label htmlFor="">password</label>
    <input type="password"{...register('password',{require:true})} onChange={(e)=>ValidityState(e.target.value)} /> <br />
    {errorMessage===""?null:<span style={{fontweight:"bold",color:"red"}}>{errorMessage} </span>}
    <button type='submit'>submit</button>
    </form>
  )
}
export default HookForm
