import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const contactkInitialState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactkInitialState,
  reducers: {
    addContact(state, action) {
      state.items.unshift(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

export const persistedContactReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { addContact, deleteContact } = contactSlice.actions;

export const getContacts = state => state.contacts.items;

export const contactsReducer = contactSlice.reducer;
