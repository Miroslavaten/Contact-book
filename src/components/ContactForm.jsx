import React, { useContext, useState } from "react";
import { contactContext } from "../context/ContactContext";

const initState = {
  name: "",
  text: "",
  number: "",
};
const ContactForm = () => {
  const [inpValues, setInpValues] = useState(initState);
  const { addContact } = useContext(contactContext);

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  };

  return (
    <div className="container">
      <div className="inputs-wrapper">
        <input
          type="text"
          placeholder="title"
          value={inpValues.name}
          onChange={handleChange}
          name="name"
        />
        <input
          type="text"
          placeholder="price"
          value={inpValues.text}
          onChange={handleChange}
          name="text"
        />
        <input
          type="text"
          placeholder="image"
          value={inpValues.number}
          onChange={handleChange}
          name="number"
        />
      </div>
      <button className="btn-add" onClick={() => addContact(inpValues)}>
        Add
      </button>
    </div>
  );
};

export default ContactForm;
