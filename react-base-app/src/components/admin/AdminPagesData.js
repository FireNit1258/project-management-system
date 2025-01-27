import React, { useState, useEffect } from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import LockIcon from "@mui/icons-material/Lock";

import TopAdminBarComponents from "./common/TopAdminBarComponents";
import AdminSideMenuComponents from "./common/AdminSideMenuComponents";
import { getAdminPages,deleteAdminPage,updateUserPasswordApi } from "../../services/apiService";
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import DialogBoxComponent from "../common/DialogBoxComponent";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextInputComponent from "../common/TextInputComponent";
import AlertComponent from '../common/AlertComponent';



function AdminPagesData() {


  const navigate = useNavigate();
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "page_title",
      headerName: "Page name",
      width: 250,
      sortable: true,
    },
    {
      field: "page_short_description",
      headerName: "Page Short Description",
      width: 450,
      sortable: true,
    },
    
    {
      field: "createdAt",
      headerName: "Created on",
      sortable: true,
      width: 250,
    },
    {
      field: "updatedAt",
      headerName: "Updated on",
      sortable: true,
      width: 250,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <div>
          <Tooltip title="Edit">
            <IconButton color="primary" onClick={() => handleEdit(params.id)}>
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton
              color="secondary"
              onClick={() => handleDelete(params.id)}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </div>
      ),
    },
  ];

  const [userData, setuserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [operationId, setOperationId] = useState(0);

  const [newPassword, setNewPassword] = useState([]);
  const [dialogPassordOpen, setDialogPassordOpen] = useState(false);
  

  const [alertData, setAlertData] = useState({
    alert_show: false,
    alert_message: "",
    alert_title: "",
    alert_type: "",
  });

  useEffect(() => {
    // Simulate a data fetch with a timeout
    getUserData();
  }, []);

  const getUserData = async () => {
    setLoading(true);
    try {
      const response = await getAdminPages();
      if (response) {
        if (response.success === true) {
          setuserData(response.data);
          setLoading(false);
        } else {
          setAlertData(() => ({
            alert_show: true,
            alert_message: response.message,
            alert_title: "Failed!",
            alert_type: "error",
          }));
          setLoading(false);
        }
      }
    } catch (err) {
      setAlertData(() => ({
        alert_show: true,
        alert_message: err.message,
        alert_title: "Failed!",
        alert_type: "error",
      }));
      setuserData([]);
    } finally {
      setLoading(false);
    }
  };

  const deleteUserData = async () => {
    setLoading(true);
    try {
      const apiData = {id:operationId};
      const response = await deleteAdminPage(apiData);
      if (response) {
        if (response.success === true) {
          setAlertData(() => ({
            alert_show: true,
            alert_message: response.message,
            alert_title: "Success!",
            alert_type: "success",
          }));
          setLoading(false);
          getUserData()
        } else {
          setAlertData(() => ({
            alert_show: true,
            alert_message: response.message,
            alert_title: "Failed!",
            alert_type: "error",
          }));
          setLoading(false);
        }
      }
    } catch (err) {
      setAlertData(() => ({
        alert_show: true,
        alert_message: err.message,
        alert_title: "Failed!",
        alert_type: "error",
      }));
      setuserData([]);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id) => {
    navigate('/admin/update_page/'+id);
  };

  const handleDelete = (id) => {
    setDialogOpen(true);
    setOperationId(id);
    
    // Implement your delete logic here
  };

  const confirmDelete = () => {
    console.log(`Deleting row with id: ${operationId}`);
    setDialogOpen(false);
    deleteUserData();
  };

  const cancelFunction = () => {
    setDialogOpen(false);
    setOperationId(0);
  };

  const addUser = () => {
    navigate('/admin/create_page');
  };

  const handleUpdatePassword = (id) => {
    setDialogPassordOpen(true);
    setOperationId(id);
    
    // Implement your delete logic here
  };



  const handlePasswordChange = (e) => {
    const {  value } = e.target;
    setNewPassword(value)
  };

  const confirmUpdatePassword = () => {
    console.log(`Deleting row with id: ${operationId}`);
    setDialogPassordOpen(false);
    updateUserPassword();
  };

  const cancelUpdatePassword = () => {
    setDialogPassordOpen(false);
    setOperationId(0);
  };

  const updateUserPassword = async () => {
    setLoading(true);
    try {
      const apiData = {id:operationId, password: newPassword};
      const response = await updateUserPasswordApi(apiData);
      if (response) {
        if (response.success === true) {
          setAlertData(() => ({
            alert_show: true,
            alert_message: response.message,
            alert_title: "Success!",
            alert_type: "success",
          }));
          setLoading(false);
        } else {
          setAlertData(() => ({
            alert_show: true,
            alert_message: response.message,
            alert_title: "Failed!",
            alert_type: "error",
          }));
          setLoading(false);
        }
      }
    } catch (err) {
      setAlertData(() => ({
        alert_show: true,
        alert_message: err.message,
        alert_title: "Failed!",
        alert_type: "error",
      }));
    } finally {
      setLoading(false);
    }
  };



  return (
    
    <Box sx={{ display: "flex" }}>
      
      <DialogBoxComponent opendialog={dialogOpen}  oncancelfunction={cancelFunction} onconfirmfunction={confirmDelete} alerttitle="Are you sure?" alertmessagetext="Are you sure, you want to delete this record ?" okbuttontext="Yes, Delete" cancelbuttontext="No, cancel"    />

      <DialogBoxComponent opendialog={dialogPassordOpen}  oncancelfunction={cancelUpdatePassword} onconfirmfunction={confirmUpdatePassword} alerttitle="Update Password" alertmessagetext="Please enter the password below to update" okbuttontext="Yes, Update" cancelbuttontext="No, cancel" formfields={<TextInputComponent
                      margin="normal"
                      required
                      fullWidth
                      type="password"
                      id="new_password"
                      label="New Password"
                      name="new_password"
                      autoComplete="new_password"
                      autoFocus
                      handleChange={handlePasswordChange}
                      value={newPassword}
                    />}   />


      <TopAdminBarComponents />
      <AdminSideMenuComponents />
      <Box></Box>     
      <Box sx={{ marginTop: 10, display: "flex", marginLeft:2 }}  display="flex" justifyContent="center" alignItems="center" >
      
       {loading ? (
        <CircularProgress color="primary" size={60} thickness={5} />
      ) : (
        <>
        <Fab color="secondary" aria-label="add" onClick={addUser}>
        <AddIcon />
        </Fab>

        <DataGrid
          rows={userData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
        </>
      
      )}
      
      </Box>
     


      
    </Box>
  );
}
export default AdminPagesData;
