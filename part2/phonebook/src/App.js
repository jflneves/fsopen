import React, { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      phone: '35-21-4423233'
    }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ filter, setFilter ] = useState('')

  const submit = (event) => {
      event.preventDefault()
      if(persons.map(p => p.name).includes(newName)){
          alert(`${newName} is already added to the phonebook`)
          return;
      }
      const newPerson = {
          name: newName,
          phone: newPhone
      }
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewPhone('')
  }

  const changeNewName = (event) => {
      setNewName(event.target.value)
  }
 
  const changeNewPhone = (event) => {
    setNewPhone(event.target.value)
  }

  const filterChange = (event) => {
      setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterValue={filter} onChange={filterChange} />
      <h3>Add</h3>
      <PersonForm onSubmit={submit} nameValue={newName} nameOnChange={changeNewName} phoneValue={newPhone} phoneOnChange={changeNewPhone}/>
      <h3>Numbers</h3>
      <Persons persons={persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))}/>
    </div>
  )
}

export default App