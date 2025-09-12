import { useState, useEffect } from 'react'
import NewContact from './components/NewContact'
import ContactList from './components/ContactList'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('111-111-1111')
  const [search, setSearch] = useState('')

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('Promise Fetched', response.statusText)
        setPersons(response.data)
        console.log(persons)
      })
      .catch(error => console.log(error))
  }

  useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    if(persons.some((person) => {
      console.log(person.name)
      return person.name === newName
    })) {
      alert(`${newName} already exists in the phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
    }
  }

  const filterPersons = () => {
    return persons.filter((person) => {
      const name = person.name.toLowerCase()
      return name.includes(search)
    })
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <label>
        filter shown with 
        <input 
          value={search}
          onChange={(event) => setSearch(event.target.value.toLowerCase())}
        />
      </label>
      <h2>Add New Contact</h2>
      <NewContact 
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <ContactList persons={filterPersons()} />
    </div>
  )
}

export default App