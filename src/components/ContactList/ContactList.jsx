import PropTypes from 'prop-types';

import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map((contact, id) => (
        <li key={id} className={css.contactItem}>
          <p className={css.contactText}>
            {contact.name}: {contact.number}
          </p>
          <button
            className={css.contactListBtn}
            type="button"
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.protoTypes = {
  contacts: PropTypes.arrayOf(PropTypes.string),
  onDeleteContact: PropTypes.func.isRequired,
};
