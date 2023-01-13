import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { contactContext } from "../context/ContactContext";

const ContactEdit = () => {
  const { updateContact, getOneContact, currentContact } =
    useContext(contactContext);
  const [inpValues, setInpValues] = useState(currentContact);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOneContact(params.id);
  }, []);

  useEffect(() => {
    setInpValues(currentContact);
  }, [currentContact]);

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  };
  console.log(currentContact);
  const handleSubmit = (e) => {
    e.preventDefault();
    updateContact(params.id, inpValues);
    navigate("/");
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
      <button className="btn-add" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};

export default ContactEdit;
