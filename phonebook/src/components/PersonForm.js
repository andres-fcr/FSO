import React from 'react'

const PersonForm = ({ handleSubmit, handleInputChange, name, phone }) => {
  return (
     <form onSubmit={handleSubmit}>
        <div>
           name: <input onChange={handleInputChange} value={name} name="name" />
        </div>
        <div>
           Phone: <input type="mail" onChange={handleInputChange} value={phone} name="phone" />
        </div>
        <div>
           <button type="submit">add</button>
        </div>
     </form>
  )
}

export default PersonForm