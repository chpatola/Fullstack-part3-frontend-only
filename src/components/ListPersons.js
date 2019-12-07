import React from 'react'
import Person from './Person'


const ListPersons = ({persons, erasePersonId}) => persons.map(person =>
  <Person
  key = {person.name} person = {person} id = {person.id} erasePersonId = {erasePersonId}/>
    
    )

    export default ListPersons