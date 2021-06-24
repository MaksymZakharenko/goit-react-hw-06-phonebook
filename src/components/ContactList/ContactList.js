import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deletedItem } from "../../redux/contacts/contacts.actions";
import styles from "./ContactList.module.css";

const ContactList = ({ items, handleDelete }) => {
  return (
    <ul className={styles.ul}>
      {items.map(({ id, name, number }) => (
        <li key={id} className={styles.textContent}>
          <p>
            {name}: {number}
          </p>
          <button
            className={styles.btn}
            type="button"
            onClick={() => handleDelete(id)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  items: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  const { items, filter } = state;

  const formattedFilter = filter.toLowerCase().trim();
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(formattedFilter)
  );
  return {
    items: filteredItems,
  };
};

const mapDispatchToProps = {
  handleDelete: deletedItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

// import PropTypes from "prop-types";
// import ContactsListItem from "../ContactListItem/ContactListItem";
// import styles from "./ContactList.module.css";

// const ContactsList = ({ items, handleDelete }) => {
//   return (
//     <>
//       <ul className={styles.ul}>
//         {items.map((item) => (
//           <ContactsListItem
//             key={item.id}
//             item={item}
//             handleDelete={() => handleDelete(item.id)}
//           />
//         ))}
//       </ul>
//     </>
//   );
// };

// ContactsList.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
//     .isRequired,
//   handleDelete: PropTypes.func.isRequired,
// };

// export default ContactsList;
