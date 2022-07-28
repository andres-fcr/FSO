import { useState } from 'react'
import Filter from './components/Filter'
import People from './components/People'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: 123, id: 1 },
    { name: 'Andres', phone: 456, id: 2 },
    { name: 'Silvia', phone: 456, id: 3 },
    { name: 'Natalia', phone: 456, id: 4 },
    { name: 'Milena', phone: 456, id: 5 },
    { name: 'Maicol', phone: 456, id: 6 },
  ])
  const [newName, setNewName] = useState({
    name: '',
    phone: "",
    id: persons.length + 1
  })
  const [searchTerm, setSearchTerm] = useState('')
  const [showAll, setShowAll] = useState(true)

  const {name, phone} = newName

  const showAllPeople = showAll
    ? persons
    : persons.filter(person => person.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))


  const handleInputChange = (e) => {
    console.log(newName);
    setNewName({
      ...newName,
      [e.target.name]: e.target.value
    })
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
    !setSearchTerm === ("") || (' ')
      ? setShowAll(false)
      : setShowAll(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    !persons.some(person => person.name.toLocaleLowerCase() === newName.name)
      ? setPersons(persons.concat(newName))
      : alert(`${newName.name} already exists in phonebook`)
    setNewName({
      name: '',
      phone: ''
    })
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearchChange={handleSearchChange} searchTerm={searchTerm} />
      <h2>Add new</h2>
      <PersonForm handleSubmit={handleSubmit} name={name} phone={phone} handleInputChange={handleInputChange} />
      <h2>Numbers</h2>
      <People showAllPeople={showAllPeople} />
    </div>
  )
}

export default App