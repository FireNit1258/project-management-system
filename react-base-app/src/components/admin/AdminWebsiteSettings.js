import React, { useState, useEffect } from "react";
import { Box, Typography, Switch } from "@mui/material";

import TopAdminBarComponents from "./common/TopAdminBarComponents";
import AdminSideMenuComponents from "./common/AdminSideMenuComponents";
import TextareaComponent from "../common/TextareaComponent";
import TexteditorComponent from "../common/TexteditorComponent";

import {
  updateAdminUserProfile,
  getWebsiteSettings,
  updateWebsiteSettings
} from "../../services/apiService";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate, useParams } from "react-router-dom";
import ButtonComponent from "../common/ButtonComponent";
import TextInputComponent from "../common/TextInputComponent";
import AlertComponent from "../common/AlertComponent";

function AdminWebsiteSettings() {
    // Function to scroll to the target div
    const scrollToTarget = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };


  const navigate = useNavigate();
  const { id } = useParams();

  const [checked, setChecked] = React.useState(true);
  const [loading, setLoading] = useState(false);
  const [siteDownMessage, setSiteDownMessage] = useState("");
  const [alertData, setAlertData] = useState({
    alert_show: false,
    alert_message: "",
    alert_title: "",
    alert_type: "",
  });
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    getWebsiteSettingsData();
  }, []);

  const [formData, setFormData] = useState({
    id: "",
    website_name: "",
    website_global_meta_title: "",
    website_global_meta_keywords: "",
    website_logo: "",
    copyright_text: "",
    admin_list_page_size: "",
    front_list_page_size: "",
    from_email: "",
    from_name: "",
    website_address: "",
    website_email: "",
    website_phone: "",
    site_on: "",
    site_down_message: "",
  });

  const getWebsiteSettingsData = async () => {
    setLoading(true);
    try {
      const api_request_data = {
        id: "1",
      };
      const response = await getWebsiteSettings(api_request_data);
      if (response) {
        if (response.success === true) {
          console.log(response);
          const {
            id,
            website_name,
            website_global_meta_title,
            website_global_meta_keywords,
            website_logo,
            copyright_text,
            admin_list_page_size,
            front_list_page_size,
            from_email,
            from_name,
            website_address,
            website_email,
            website_phone,
            site_on,
            site_down_message,
          } = response.data;
          setFormData({
            id,
            website_name,
            website_global_meta_title,
            website_global_meta_keywords,
            website_logo,
            copyright_text,
            admin_list_page_size,
            front_list_page_size,
            from_email,
            from_name,
            website_address,
            website_email,
            website_phone,
          });
          setSiteDownMessage(site_down_message);
          if(site_on === 1)
            setChecked(true)
          else
            setChecked(true)

          
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
      setFormData([]);
    } finally {
      setLoading(false);
    }
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData, // Keep previous form data intact
      [name]: value, // Update the specific input field value
    }));
  };

  const submitUpdateForm = () => {

    let site_on = 0;
    if(checked) {
      site_on = 1
    }

    const api_request_data = {

      id: formData.id,
      website_name: formData.website_name,
      website_global_meta_title: formData.website_global_meta_title,
      website_global_meta_keywords: formData.website_global_meta_keywords,
      website_logo: formData.website_logo,
      copyright_text: formData.copyright_text,
      admin_list_page_size: formData.admin_list_page_size,
      front_list_page_size: formData.front_list_page_size,
      from_email: formData.from_email,
      from_name: formData.from_name,
      website_address: formData.website_address,
      website_email: formData.website_email,
      website_phone: formData.website_phone,
      site_on: site_on,
      site_down_message: siteDownMessage,

    };

    console.log("api_request_data", api_request_data);
    updateWebsiteSetting(api_request_data);
  };

  const cancelForm = () => {
    navigate("/admin/users");
  };

  const updateWebsiteSetting = async (apiData) => {
    const response = await updateWebsiteSettings(apiData);
    if (response) {
      scrollToTarget();
      if (response.success === true) {
        setAlertData(() => ({
          alert_show: true,
          alert_message: response.message,
          alert_title: "Success!",
          alert_type: "success",
        }));
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
        Update User
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
          <Box component="form" noValidate sx={{ width: "75%" }}>
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
              id="website_name"
              label="Website name"
              name="website_name"
              autoComplete="name"
              autoFocus
              handleChange={handleFieldChange}
              value={formData.website_name}
            />
            <TextInputComponent
              margin="normal"
              required
              fullWidth
              name="website_global_meta_title"
              label="Website global meta title"
              id="website_global_meta_title"
              autoComplete="website_global_meta_title"
              handleChange={handleFieldChange}
              value={formData.website_global_meta_title}
            />
            <TextareaComponent
              maxRows={100}
              minRows={5}
              txtname="website_global_meta_keywords"
              txtid="website_global_meta_keywords"
              ariaLabel="maximum height"
              placeHolder="website_global_meta_keywords"
              defaultSetValue={formData.website_global_meta_keywords}
              handleChange={handleFieldChange}
              txtvalue={formData.website_global_meta_keywords}
            />
            <TextInputComponent
              margin="normal"
              required
              fullWidth
              name="website_logo"
              label="Website logo"
              id="website_logo"
              autoComplete="website_logo"
              handleChange={handleFieldChange}
              value={formData.website_logo}
            />
            <TextInputComponent
              margin="normal"
              required
              fullWidth
              name="copyright_text"
              label="copyright_text"
              id="copyright_text"
              autoComplete="copyright_text"
              handleChange={handleFieldChange}
              value={formData.copyright_text}
            />
            <TextInputComponent
              margin="normal"
              required
              fullWidth
              type="number"
              name="admin_list_page_size"
              label="admin_list_page_size"
              id="admin_list_page_size"
              autoComplete="admin_list_page_size"
              handleChange={handleFieldChange}
              value={formData.admin_list_page_size}
            />
            <TextInputComponent
              margin="normal"
              required
              fullWidth
              type="number"
              name="front_list_page_size"
              label="front_list_page_size"
              id="front_list_page_size"
              autoComplete="front_list_page_size"
              handleChange={handleFieldChange}
              value={formData.front_list_page_size}
            />
            <TextInputComponent
              margin="normal"
              required
              fullWidth
              name="from_email"
              label="from_email"
              id="from_email"
              autoComplete="from_email"
              handleChange={handleFieldChange}
              value={formData.from_email}
            />
            <TextInputComponent
              margin="normal"
              required
              fullWidth
              name="from_name"
              label="from_name"
              id="from_name"
              autoComplete="from_name"
              handleChange={handleFieldChange}
              value={formData.from_name}
            />
            <TextInputComponent
              margin="normal"
              required
              fullWidth
              name="website_address"
              label="website_address"
              id="website_address"
              autoComplete="website_address"
              handleChange={handleFieldChange}
              value={formData.website_address}
            />
            <TextInputComponent
              margin="normal"
              required
              fullWidth
              name="website_email"
              label="website_email"
              id="website_email"
              autoComplete="website_email"
              handleChange={handleFieldChange}
              value={formData.website_email}
            />
            <TextInputComponent
              margin="normal"
              required
              fullWidth
              name="website_phone"
              label="website_phone"
              id="website_phone"
              autoComplete="website_phone"
              handleChange={handleFieldChange}
              value={formData.website_phone}
            />
            <TexteditorComponent
              editorValue={siteDownMessage}
              editorName="site_down_message"
              editorId="site_down_message"
              editorPlaceHolder="Enter site down message"
              handleChange={setSiteDownMessage}
              editorStyle={{ height: 300, marginBottom: 20 }}
            />
            <br /> <br />
            <div>
              <div>Website on/off: </div>
              <div>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
            </div>
            <br />
            <br />
            <ButtonComponent
              buttonLabel="Update Details"
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
export default AdminWebsiteSettings;
