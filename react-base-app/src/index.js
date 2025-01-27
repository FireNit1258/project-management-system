import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import './index.css';
import App from './App';
import router from './routes/Routes';
import { AdminUserProvider } from "./components/admin/admincontext/AdminUserContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AdminUserProvider>
    <RouterProvider router={router} >
      <App />
      </RouterProvider>
    </AdminUserProvider>
  </React.StrictMode>
);

