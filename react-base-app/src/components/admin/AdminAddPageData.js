import React, { useState, useEffect } from "react";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TopAdminBarComponents from "./common/TopAdminBarComponents";
import AdminSideMenuComponents from "./common/AdminSideMenuComponents";
import { addAdminPage } from "../../services/apiService";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate, useParams } from "react-router-dom";
import ButtonComponent from "../common/ButtonComponent";
import TextInputComponent from "../common/TextInputComponent";
import AlertComponent from "../common/AlertComponent";
import TextareaComponent from "../common/TextareaComponent";
import TexteditorComponent from "../common/TexteditorComponent";

function AdminAddPageData() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [productDescription, setProductDescription] = useState("");
  const [alertData, setAlertData] = useState({
    alert_show: false,
    alert_message: "",
    alert_title: "",
    alert_type: "",
  });

  const [formData, setFormData] = useState({
    page_title: "",
    page_short_description: "",
    page_description: "",
  });

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData, // Keep previous form data intact
      [name]: value, // Update the specific input field value
    }));
  };

  const submitUpdateForm = () => {
    const api_request_data = {
      page_title: formData.page_title,
      page_short_description: formData.page_short_description,
      page_description: productDescription
    };

    console.log("api_request_data", api_request_data);
    addProfile(api_request_data);
  };

  const cancelForm = () => {
    navigate("/admin/pages");
  };

  const addProfile = async (apiData) => {
    const response = await addAdminPage(apiData);
    if (response) {
      if (response.success === true) {
        setAlertData(() => ({
          alert_show: true,
          alert_message: response.message,
          alert_title: "Success!",
          alert_type: "success",
        }));
        setFormData([]);
        navigate("/admin/pages");
      } else {
        setAlertData(() => ({
          alert_show: true,
          alert_message: response.message,
          alert_title: "Failed!",
          alert_type: "error",
        }));
      }
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <TopAdminBarComponents />
      <AdminSideMenuComponents />

      <Typography variant="h6" sx={{ marginBottom: "8px", fontWeight: "bold" }}>
        Create Page
      </Typography>
      <Box
        sx={{ marginTop: 10, display: "flex" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        {loading ? (
          <CircularProgress color="primary" size={60} thickness={5} />
        ) : (
          <Box component="form" noValidate sx={{ width: "100%" }}>
            <AlertComponent
              show={alertData.alert_show}
              severity={alertData.alert_type}
              variant="filled"
              color={alertData.alert_type}
              alerttitle={alertData.alert_title}
              alertmessagetext={alertData.alert_message}
            />
            <TextInputComponent
              margin="normal"
              required
              fullWidth
              id="page_title"
              label="Page Title"
              name="page_title"
              autoComplete="page_title"
              autoFocus
              handleChange={handleFieldChange}
              value={formData.page_title}
            />

            <TextareaComponent
              maxRows={100}
              minRows={5}
              txtname="page_short_description"
              txtid="page_short_description"
              ariaLabel="maximum height"
              placeHolder="Enter short Description"
              defaultSetValue={formData.page_short_description}
              handleChange={handleFieldChange}
              txtvalue={formData.page_short_description}
            />

            <TexteditorComponent
              editorValue={productDescription}
              editorName="page_description"
              editorId="page_description"
              editorPlaceHolder="Enter Page Description"
              handleChange={setProductDescription}
              editorStyle={{ height: 300, marginBottom: 20 }}
            />
            <br /><br /><br />

            <ButtonComponent
              buttonLabel="Add Page"
              buttonColor="primary"
              buttonSize="large"
              buttonVariant="contained"
              clickHandler={submitUpdateForm}
            />
            <ButtonComponent
              buttonLabel="Cancel"
              buttonColor="secondary"
              buttonSize="large"
              buttonVariant="contained"
              clickHandler={cancelForm}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}
export default AdminAddPageData;
