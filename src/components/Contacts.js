import React from "react";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import ContactForm from "./ContactForm/ContactForm";
import styles from "./Contacts.module.css";

const App = () => {
  return (
    <div className="container">
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.titleContact}>Contacts</h2>
      <div className={styles.block}>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default App;

// import { Component } from "react";
// import { v4 as uuid } from "uuid";
// import ContactForm from "./ContactForm/ContactForm";
// import Filter from "./Filter/Filter";
// import ContactsList from "./ContactList/ContactList";
// import styles from "./Contacts.module.css";
// import { connect } from "react-redux";
// import {
//   addNewContacts,
//   removeContacts,
//   filterContacts,
// } from "../redux/contacts/contacts.actions";

// class Contacts extends Component {
//   state = {
// items: [],
// filter: "",
// };
// handleDelete = (id) => {
//   this.setState((prevState) => ({
//     items: prevState.items.filter((item) => item.id !== id),
//   }));
// };

// handleChange = (evt) => {
//   this.setState({ [evt.target.name]: evt.target.value });
// };

// handleSubmit = (term) => {
//   if (!term) {
//     alert("Поле не может быть пустым!");
//     return;
//   }

//   const isDuplicate = this.props.items.some(
//     (item) => item.name === term.name
//   );
//   if (isDuplicate) {
//     alert("Контакт: " + term.name + " уже существует ");
//     return;
//   }

//   const newContact = {
//     id: uuid(),
//     name: term.name,
//     number: term.number,
//   };

//   this.props.addNewContacts(newContact);

// this.setState((prevState) => {
//   const newItems = [newTodo, ...prevState.items];
//   return { items: newItems };
// });
// };

// render() {
//   const { items, filter } = this.props;
// const formattedFilter = filter.toLowerCase().trim();
// const filteredItems = items.filter((item) =>
//   item.name.toLowerCase().includes(formattedFilter)
// );
// const { filter } = this.state;
//     return (
//       <div className="container">
//         <h1 className={styles.title}>Phonebook</h1>
//         <ContactForm handleSubmit={this.handleSubmit} />
//         <h2 className={styles.titleContact}>Contacts</h2>
//         <div className={styles.block}>
//           <Filter filter={filter} handleChange={this.props.handleChange} />
//           <ContactsList
//             items={items}
//             handleDelete={this.props.handleDelete}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// const mapState = (state) => {
//   const items = state.items;
//   const filter = state.filter;

//   const formattedFilter = filter.toLowerCase().trim();
//   const filteredItems = items.filter((item) =>
//     item.name.toLowerCase().includes(formattedFilter)
//   );
//   return {
//     items: filteredItems,
//     filter: state.filter,
//   };
// };

// const mapDispatchToProps = {
//   addNewContacts,
//   handleDelete: removeContacts,
//   handleChange: filterContacts,
// };

// export default connect(mapState, mapDispatchToProps)(Contacts);
