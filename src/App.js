import React, { useState, useEffect } from 'react'
import Personform from './components/Personform'
import ListPersons from './components/ListPersons'
import personService from './services/persons'
import Notification from './components/Notification'

//Exercises 2.19
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [Message, setMessage] = useState(null)

  //***GET ALL DATA FROM DATABASE***
  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(initialPersons => {
        console.log('promise fulfilled')
        setPersons(initialPersons)
      })
  }, [])

  //***ADD DATA TO DATABASE***
  const addNameNumber = (event) => {
    event.preventDefault()
    console.log('Clicked button', event.target)

    const rows = () => persons.map(person => person.name)
    const rows_number = () => persons.map(person => person.number)

    console.log('Dessa förnamn har vi innan läggs till', rows())

    /* Trying to make sure whitespaces cannot disturb contain-function with newName*/
    var string = toString(newName)
    var noSpace = string.trim()

    var string_number = toString(newNumber)
    var noSpace_number = string_number.trim()

    if (rows().includes(newName) || rows().includes(noSpace)) {
      window.alert(newName + ' is already in phonebook')
    }
    if (rows_number().includes(newNumber) || rows_number().includes(noSpace_number)) {
      window.alert(newNumber + " is already in phonebook")
      
    } 
    else {
      const nameObject = {
        name: newName,
        number: newNumber,
      }
      personService
        .create(nameObject)
        .then(newPerson => {
          setPersons(persons.concat(newPerson))
          setNewName('')
          setNewNumber('')
          setMessage(
            `Person named '${nameObject.name}' was added`
          )
          setTimeout(() => {
            setMessage(null)
          }, 5000)

        })

    }
  }
  //***REMOVE DATA FROM DATABASE***
  const erasePersonId = (id) => {
    console.log('taking in id:s here ' + id + " id")
    let personToDelete = persons.find(p => p.id === id)
    let personsToRemain = persons.filter(p => p.id !== id)
    console.log("Persons to temain; " + personsToRemain)

    if (window.confirm("Are you sure you want to erase " + personToDelete.name + " ?")) {
      personService
        .erase(id)
        .then(
          console.log(`We jus erased ${personToDelete.name} with id ${personToDelete.id}`),
          setPersons(personsToRemain)
        )
    }
  }

  const handleNameChange = (event) => {
    console.log('new name to add ' + event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log('new number to add ' + event.target.value)
    setNewNumber(event.target.value)
  }

  console.log(persons)

  //***RETURN ALL DATA IN CORRECT FORMAT***

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={Message} />
      <h3>Add a new person</h3>
   
      <Personform addNameNumber={addNameNumber}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>

      <ListPersons persons={persons} erasePersonId={erasePersonId} />
      ...
    </div>
  )
}

export default App
