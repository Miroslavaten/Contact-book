import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { contactContext } from "../context/ContactContext";
import Contact from "./Contact";
import ContactForm from "./ContactForm";
// import { Link } from "react-router-dom";

const ContactList = () => {
  const { getContacts, contacts, deleteContact } = useContext(contactContext);
  // console.log(contacts);

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div>
      <h1 className="title">CONTACT</h1>
      <ContactForm />
      <Contact />
      {contacts.length > 0
        ? contacts.map((item) => (
            <div key={item.id} className="wrapper">
              <div className="wrapper-info">
                <h3>{item.name}</h3>
                <p>{item.text}</p>
                <p>{item.number}</p>
              </div>
              <div className="btn-wrapper">
                <Link to={`/edit/${item.id}`}>
                  <button className="edit-btn">EDIT</button>
                </Link>

                <button
                  onClick={() => deleteContact(item.id)}
                  className="delete-btn"
                >
                  DELETE
                </button>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default ContactList;
