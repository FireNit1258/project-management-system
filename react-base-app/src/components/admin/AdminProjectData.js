import React, { useState, useEffect } from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TopAdminBarComponents from "./common/TopAdminBarComponents";
import AdminSideMenuComponents from "./common/AdminSideMenuComponents";
import { getAdminProjects,deleteAdminCategory } from "../../services/apiService";
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import DialogBoxComponent from "../common/DialogBoxComponent";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function AdminProjectData() {
  const navigate = useNavigate();
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "project_name",
      headerName: "Project Name",
      width: 200,
      sortable: true,
    },
    {
      field: "project_category",
      headerName: "Project Category",
      sortable: true,
      width: 200,
      renderCell: (params) => {
        const value = params.value;
        // Display 'No Value' if null, or the name property if it's an object
        return value ? value.name : 'SELF';
      },
    },
    {
      field: "project_technology",
      headerName: "Project Technologies",
      width: 200,
      sortable: true,
    },
    {
      field: "completed_duration",
      headerName: "Duration",
      width: 200,
      sortable: true,
    },
    {
      field: "display_order",
      headerName: "Display Order",
      sortable: true,
      width: 150,
    },
    {
      field: "createdAt",
      headerName: "Created on",
      sortable: true,
      width: 200,
    },
    {
      field: "updatedAt",
      headerName: "Updated on",
      sortable: true,
      width: 200,
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
  

  const [alertData, setAlertData] = useState({
    alert_show: false,
    alert_message: "",
    alert_title: "",
    alert_type: "",
  });

  useEffect(() => {
    // Simulate a data fetch with a timeout
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await getAdminProjects();
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

  const deleteData = async () => {
    setLoading(true);
    try {
      const apiData = {id:operationId};
      const response = await deleteAdminCategory(apiData);
      if (response) {
        if (response.success === true) {
          setAlertData(() => ({
            alert_show: true,
            alert_message: response.message,
            alert_title: "Success!",
            alert_type: "success",
          }));
          setLoading(false);
          getData()
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
    console.log(`Editing row with id: ${id}`);
    navigate('/admin/add_project/'+id);
  };

  const handleDelete = (id) => {
    setDialogOpen(true);
    setOperationId(id);
    
    // Implement your delete logic here
  };

  const confirmDelete = () => {
    console.log(`Deleting row with id: ${operationId}`);
    setDialogOpen(false);
    deleteData();
  };

  const cancelFunction = () => {
    setDialogOpen(false);
    setOperationId(0);
  };

  const addRecord = () => {
    navigate('/admin/add_project');
  };

  



  return (
    
    <Box sx={{ display: "flex" }}>
      
      <DialogBoxComponent opendialog={dialogOpen}  oncancelfunction={cancelFunction} onconfirmfunction={confirmDelete} alerttitle="Are you sure?" alertmessagetext="Are you sure, you want to delete this record ?" okbuttontext="Yes, Delete" cancelbuttontext="No, cancel"    />
      <TopAdminBarComponents />
      <AdminSideMenuComponents />
      <Box></Box>     
      <Box sx={{ marginTop: 10, display: "flex", marginLeft:2 }}  display="flex" justifyContent="center" alignItems="center" >
      
       {loading ? (
        <CircularProgress color="primary" size={60} thickness={5} />
      ) : (
        <>
        <Fab color="secondary" aria-label="add" onClick={addRecord}>
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
export default AdminProjectData;
