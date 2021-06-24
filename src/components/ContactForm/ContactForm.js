import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import styles from "./ContactForm.module.css";
import { addNewToList } from "../../redux/contacts/contacts.actions";
import { connect } from "react-redux";

class ContactForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };
  state = {
    name: "",
    number: "",
  };

  handleSubmit = (name, number) => {
    const isDuplicate = this.props.items.some((item) => item.name === name);

    if (isDuplicate) {
      alert(name + " is already in contacts ");
      return;
    }

    const newContact = {
      id: uuidv4(),
      name: name,
      number: number,
    };

    this.props.addNewToList(newContact);
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    this.handleSubmit(this.state.name, this.state.number);
    this.setState({ name: "", number: "" });
  };
  render() {
    return (
      <>
        <form className={styles.form} onSubmit={this.onSubmit}>
          <span className={styles.title}>Name</span>
          <input
            onChange={this.handleChange}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          <span className={styles.title}>Number</span>
          <input
            name="number"
            type="tel"
            onChange={this.handleChange}
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
          <button className={styles.btn} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = {
  addNewToList,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

// import React, { Component } from "react";
// import { v4 as uuid } from "uuid";
// import PropTypes from "prop-types";
// import styles from "./ContactForm.module.css";

// class ContactForm extends Component {
//   static propTypes = {
//     handleSubmit: PropTypes.func.isRequired,
//   };

//   state = {
//     id: uuid(),
//     name: "",
//     number: "",
//   };

//   handleChange = (evt) => {
//     this.setState({ [evt.target.name]: evt.target.value });
//   };

//   onSubmit = (evt) => {
//     evt.preventDefault();

//     this.props.handleSubmit(this.state);

//     this.setState({ name: "", number: "" });
//   };

//   render() {
//     return (
//       <>
//         <form className={styles.form} onSubmit={this.onSubmit}>
//           <span className={styles.title}>Name</span>
//           <input
//             onChange={this.handleChange}
//             value={this.state.name}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//           />
//           <span className={styles.title}>Number</span>
//           <input
//             name="number"
//             type="tel"
//             onChange={this.handleChange}
//             value={this.state.number}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//             required
//           />
//           <button className={styles.btn} type="submit">
//             Add contact
//           </button>
//         </form>
//       </>
//     );
//   }
// }

// export default ContactForm;
