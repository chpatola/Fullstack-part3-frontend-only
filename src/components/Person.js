import React from 'react'

const Person = ({person, erasePersonId}) =>{
    //Funkar om du tar onClick = {erasePersonId}
    return(
        <li>
        {person.name+', '}
        {person.number+' '}
        <button onClick={()=>erasePersonId(person.id)}>Delete</button>
        </li>
    )
}
export default Person