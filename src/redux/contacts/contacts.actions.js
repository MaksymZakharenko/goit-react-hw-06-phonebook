import { createAction } from "@reduxjs/toolkit";

const addNewToList = createAction("list/addToList");
const deletedItem = createAction("list/deletedItem");
const filterChange = createAction("filter/filterChange");


export { addNewToList, deletedItem, filterChange };

// import {
//   ADD_NEW_CONTACT,
//   REMOVE_CONTACT,
//   FILTER_CONTACT,
// } from "./contacts.constans";

// const addNewContacts = (payload) => {
//   return {
//     type: ADD_NEW_CONTACT,
//     payload,
//   };
// };

// const removeContacts = (payload) => {
//   return {
//     type: REMOVE_CONTACT,
//     payload,
//   };
// };

// const filterContacts = (payload) => {
//   return {
//     type: FILTER_CONTACT,
//     payload: payload.target.value,
//   };
// };

// export { addNewContacts, removeContacts, filterContacts };
