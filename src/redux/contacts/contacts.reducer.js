import { createReducer } from "@reduxjs/toolkit";
import { addNewToList, deletedItem, filterChange } from "./contacts.actions";

const initialState = {
  items: [],
  filter: "",
};

const contactsReducer = createReducer(initialState, {
  [addNewToList]: (state, action) => ({
    ...state,
    items: [action.payload, ...state.items],
  }),
  [deletedItem]: (state, action) => ({
    ...state,
    items: state.items.filter((item) => item.id !== action.payload),
  }),
  [filterChange]: (state, action) => ({
    ...state,
    filter: action.payload,
  }),
});

export default contactsReducer;

// import {
//   ADD_NEW_CONTACT,
//   FILTER_CONTACT,
//   REMOVE_CONTACT,
// } from "./contacts.constans";

// const initialState = {
//   items: [],
//   filter: "",
// };

// const contactsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_NEW_CONTACT:
//       return {
//         ...state,
//         items: [action.payload, ...state.items],
//       };
//     case REMOVE_CONTACT:
//       return {
//         ...state,
//         items: state.items.filter((item) => item.id !== action.payload),
//       };
//     case FILTER_CONTACT:
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default contactsReducer;
