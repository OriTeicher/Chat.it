"use client"

import { contactsService } from "@/services/contacts.service"
import { Contact } from "@/services/interface.service"
import React, { useState, useEffect } from "react"
import Loader from "../utils/Loader"
import { utilService } from "@/services/util.service"

export default function ContactsInbox() {
  const [contacts, setContacts] = useState<Contact[]>([])
  useEffect(() => {
    async function loadContacts() {
      const loadedContacts = await contactsService.queryContacts()
      setContacts(loadedContacts)
    }
    loadContacts()
  }, [])

  if (contacts.length === 0 || !contacts) return <Loader />
  return (
    <ul className="contacts-list">
      {contacts.map((contact) => (
        <li key={contact.id}>
          <img src={contact.profileImgUrl} alt={contact.name} />
          <div>
            <h1>{contact.name}</h1>
            <p>
              <span>{contact.lastMsg.substring(0, 45)}...</span>
              <span>{utilService.getFormattedTime(contact.seenAt)}</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}
