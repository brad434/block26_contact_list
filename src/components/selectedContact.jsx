import React from 'react'
import { useState, useEffect } from 'react'

const selectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function selectSingleContact() {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
        const data = await response.json()
        console.log(data);
        setContact(data);

      } catch (error) {
        console.log(error)
      }
    }
    selectSingleContact();
  }, [])

  return (
    <>
      {contact && (
        <>
          <div>{contact.name}</div>
          <div>{contact.email}</div>
          <div>{contact.phone}</div>
        </>
      )
      }
    </>
  )

}

export default selectedContact