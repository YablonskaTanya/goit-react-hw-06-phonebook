import React from 'react';
import ReactDOM from 'react-dom/client';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
