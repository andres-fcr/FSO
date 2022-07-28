import React from 'react'

const People = ({ showAllPeople }) => {
  return (
     <ul>
        {
           showAllPeople.map(person =>
              <li key={person.id}>{person.name}: <strong>{person.phone}</strong> </li>
           )
        }
     </ul>
  )
}

export default People