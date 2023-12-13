import React from 'react'

function PropsEg() {
  return (
    <div>
    <PropsPratice props='hai' variant='success'/>
      <PropsPratice props='hai' variant='defualt' />
      <PropsPratice props='hai' variant='errors' />
    </div>
  )
}

export default PropsEg

function PropsPratice({props,variant}){
  

    return(
      
      <div  className={variant}>
      <h2 > {props}</h2>
    
      </div>
    )
  
  }