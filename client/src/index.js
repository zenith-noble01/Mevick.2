import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AdminAuthContextProvider} from "./AdminContext/AAuthContex"

ReactDOM.render(
  <React.StrictMode>
    <AdminAuthContextProvider>
      <App />
    </AdminAuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

