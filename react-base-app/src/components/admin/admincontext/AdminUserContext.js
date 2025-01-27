import React, { createContext, useContext, useState } from "react";

// Create UserContext
const AdminUserContext = createContext();


export const AdminUserProvider = ({ children }) => {

  const adminUserName = localStorage.getItem('admin_username');

  const [adminUser, setAdminUser] = useState({
    username: adminUserName ? adminUserName : ""
  });

  return (
    <AdminUserContext.Provider value={{ adminUser, setAdminUser }}>
      {children}
    </AdminUserContext.Provider>
  );
};

// Custom Hook to use UserContext
export const useAdminUser = () => {
  return useContext(AdminUserContext);
};
