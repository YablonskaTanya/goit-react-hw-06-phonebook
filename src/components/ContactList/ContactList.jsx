import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filtered = useSelector(getFilter);

  const normalizedFilter = filtered.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={css.contactItem}>
          <p className={css.contactText}>
            {name}: {number}
          </p>
          <button
            className={css.contactListBtn}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
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
