import React from 'react'

const Personform =(props)=>{
    return(
        <form onSubmit = {props.addNameNumber}> 
      
      <div>
      name: <input
      value = {props.newName}
      onChange = {props.handleNameChange}
      />
      </div>

      <div>
      number: <input
      value = {props.newNumber}
      onChange = {props.handleNumberChange}
      />
      </div>
       
      <div>
        <button type="submit">add person</button>
      </div>

    </form>
    )

}

export default Personform