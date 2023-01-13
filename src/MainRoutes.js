import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactEdit from "./components/ContactEdit";
import ContactList from "./components/ContactList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ContactList />}></Route>
      <Route path="/edit/:id" element={<ContactEdit />}></Route>
    </Routes>
  );
};

export default MainRoutes;
