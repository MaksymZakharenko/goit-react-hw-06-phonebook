import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contacts.reducer";

const store = configureStore({
  reducer: contactsReducer,
});

export default store;

// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import contactsReducer from "./contacts/contacts.reducer";

// const store = createStore(contactsReducer, composeWithDevTools());

// export default store;
