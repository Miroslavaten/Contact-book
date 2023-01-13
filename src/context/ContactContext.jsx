import axios from "axios";
import React, { createContext, useState } from "react";

export const contactContext = createContext();

const ContactContextProvider = ({ children }) => {
  let API = "http://localhost:8000/posts";

  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState({
    name: "",
    text: "",
    number: "",
  });

  const getContacts = async () => {
    const { data } = await axios.get(API);
    setContacts(data);
  };

  const addContact = async (contact) => {
    await axios.post(API, contact);
    getContacts();
  };

  const deleteContact = async (id) => {
    await axios.delete(`${API}/${id}`);
    getContacts();
  };

  const getOneContact = async (id) => {
    let res = await axios.get(`${API}/${id}`);
    setCurrentContact(res.data);
  };

  const updateContact = async (id, newContact) => {
    axios.patch(`${API}/${id}`, newContact);
    getContacts();
  };

  const value = {
    getContacts,
    addContact,
    contacts,
    deleteContact,
    getOneContact,
    currentContact,
    updateContact,
  };
  return (
    <contactContext.Provider value={value}>{children}</contactContext.Provider>
  );
};

export default ContactContextProvider;
