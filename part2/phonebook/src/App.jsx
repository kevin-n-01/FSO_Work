import { useState, useEffect } from 'react'
import NewContact from './components/NewContact'
import ContactList from './components/ContactList'
import contactServices from './services/contacts'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('111-111-1111')
  const [search, setSearch] = useState('')

  console.log('rendering')
  useEffect(() => {
    contactServices.getAll()
                   .then(initialContacts => setPersons(initialContacts))
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const retrieveContact = persons.find(person => person.name === newName)
    if(retrieveContact) {
      if(window.confirm(`Replace existing number for ${retrieveContact.name} with ${newNumber}?`)) {
        const updatedContact = {...retrieveContact, number: newNumber}
        contactServices.updateContact(updatedContact)
                       .then(returnedContact => {
                        setPersons(persons.map(person => person.id === returnedContact.id ? returnedContact : person))
                        setNewNumber('111-111-1111')
                        setNewName('')
                       })
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      contactServices.addContact(personObject)
                     .then(returnedContact => {
                      setPersons(persons.concat(returnedContact))
                      setNewName('')
                      setNewNumber('111-111-1111')
                     })
    }
  }

  const filterPersons = () => {
    if(search !== '') {
      return persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
    } else {
      return persons
    }
  }

  const deletePerson = (id) => {
    const findPerson = persons.find((person) => person.id === id)
    console.log("Person to be deleted", findPerson.name)
    if(window.confirm(`Delete contact ${findPerson.name}?`)) {
      contactServices.deleteContact(id)
                     .then(deletedContact => {
                      setPersons(persons.filter(person => person.id !== deletedContact.id))
                      console.log(deletedContact.name, "deleted")
                     })
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <label>
        filter shown with 
        <input 
          value={search}
          onChange={(event) => setSearch(event.target.value)}
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
      <ContactList persons={filterPersons()} handleDelete={deletePerson} />
    </div>
  )
}

export default App