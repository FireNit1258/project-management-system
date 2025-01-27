import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Select,
  MenuItem,
} from "@mui/material";

import TopAdminBarComponents from "./common/TopAdminBarComponents";
import AdminSideMenuComponents from "./common/AdminSideMenuComponents";
import {
  addAdminProject,
  getAdminCategory,
  addAdminProjectImages,
  getAdminSingleProject,
  getAdminSingleProjectImages
} from "../../services/apiService";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate, useParams } from "react-router-dom";
import ButtonComponent from "../common/ButtonComponent";
import TextInputComponent from "../common/TextInputComponent";
import AlertComponent from "../common/AlertComponent";
import TextareaComponent from "../common/TextareaComponent";
import TexteditorComponent from "../common/TexteditorComponent";
import MultipleImageUploadComponent from "../common/MultipleImageUploadComponent";

const steps = [
  "Basic Project Details ",
  "Advance Project Details",
  "Upload Project Images",
];

function AdminAddProjectData() {
  const { id } = useParams();

  // Function to scroll to the target div
  const scrollToTarget = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigate = useNavigate();

  const [images, setImages] = useState([]);
  const [uploadedImagesCount, setUploadedImagesCount] = useState(0);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  const [categoryData, setCategoryData] = useState([]);
  const [productDescription, setProductDescription] = useState("");
  const [projectId, setProjectId] = useState(id);

  useEffect(() => {
    // Simulate a data fetch with a timeout
    getCategoryData();

    if (id !== undefined && id > 0) {
      getProjectData(id);
      getProjectImagesData(id);
    }
  }, []);

  const [loading, setLoading] = useState(false);
  const [alertData, setAlertData] = useState({
    alert_show: false,
    alert_message: "",
    alert_title: "",
    alert_type: "",
  });

  const [basicFormData, setBasicFormData] = useState({
    project_name: "",
    category_id: "",
    project_short_description: "",
    project_technology: "",
    completed_duration: "",
    display_order: "",
    project_description: "",
    meta_title: "",
    meta_keywords: "",
    project_slug: "",
  });

  const getProjectData = async (id) => {
    setLoading(true);
    try {
      const response = await getAdminSingleProject(id);
      if (response) {
        if (response.success === true) {
          // setup basic form data //
          setBasicFormData({
            project_name: response.data.project_name,
            category_id: response.data.category_id,
            project_short_description: response.data.project_short_description,
            project_technology: response.data.project_technology,
            completed_duration: response.data.completed_duration,
            display_order: response.data.display_order,
            project_description: response.data.project_description,
            meta_title: response.data.meta_title,
            meta_keywords: response.data.meta_keywords,
            project_slug: response.data.project_slug,
          });
          setProductDescription(response.data.project_description);
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
      setCategoryData([]);
    } finally {
      setLoading(false);
    }
  };

  const getProjectImagesData = async (id) => {
    setLoading(true);
    try {
      const response = await getAdminSingleProjectImages(id);
      if (response) {
        if (response.success === true) {
          const images_data = response.data;
          const uploaded_count = images_data.length;
          const newImages = images_data.map((item) => ({
            preview: process.env.REACT_APP_API_URL+'uploads/'+item.image_name
          }));
          setImages(newImages);
          setUploadedImagesCount(uploaded_count);
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
      setBasicFormData([]);
    } finally {
      setLoading(false);
    }
  };

  

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setBasicFormData((prevData) => ({
      ...prevData, // Keep previous form data intact
      [name]: value, // Update the specific input field value
    }));
  };

  const submitUpdateForm = () => {
    if (activeStep === 0) {
      const api_request_data = {
        step: activeStep,
        id: projectId,
        project_name: basicFormData.project_name,
        category_id: basicFormData.category_id,
        project_short_description: basicFormData.project_short_description,
        project_technology: basicFormData.project_technology,
        completed_duration: basicFormData.completed_duration,
        display_order: basicFormData.display_order,
        project_description: productDescription,
      };
      console.log("api_request_data", api_request_data);
      addProductBasicDetails(api_request_data);
    }

    if (activeStep === 1) {
      const api_request_data = {
        step: activeStep,
        id: projectId,
        meta_title: basicFormData.meta_title,
        meta_keywords: basicFormData.meta_keywords,
        project_slug: basicFormData.project_slug,
      };
      console.log("api_request_data", api_request_data);
      addProductAdvanceDetails(api_request_data);
    }

    if (activeStep === 2) {
      const api_request_data = {
        step: activeStep,
        id: projectId,
        images_count:uploadedImagesCount
      };
      console.log("api_request_data", api_request_data);
      addProductImages(api_request_data, images);
    }
  };

  const cancelForm = () => {
    navigate("/admin/projects");
  };

  const addProductBasicDetails = async (apiData) => {
    const response = await addAdminProject(apiData);
    if (response) {
      if (response.success === true) {
        setAlertData(() => ({
          alert_show: true,
          alert_message: response.message,
          alert_title: "Success!",
          alert_type: "success",
        }));
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setProjectId(response.data.id);
      } else {
        setAlertData(() => ({
          alert_show: true,
          alert_message: response.message,
          alert_title: "Failed!",
          alert_type: "error",
        }));
        scrollToTarget();
      }
    }
  };

  const addProductAdvanceDetails = async (apiData) => {
    const response = await addAdminProject(apiData);
    if (response) {
      if (response.success === true) {
        setAlertData(() => ({
          alert_show: true,
          alert_message: response.message,
          alert_title: "Success!",
          alert_type: "success",
        }));
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      } else {
        setAlertData(() => ({
          alert_show: true,
          alert_message: response.message,
          alert_title: "Failed!",
          alert_type: "error",
        }));
        scrollToTarget();
      }
    }
  };

  const addProductImages = async (apiData, images) => {
    const response = await addAdminProjectImages(apiData, images);
    if (response) {
      if (response.success === true) {
        setAlertData(() => ({
          alert_show: true,
          alert_message: response.message,
          alert_title: "Success!",
          alert_type: "success",
        }));
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      } else {
        setAlertData(() => ({
          alert_show: true,
          alert_message: response.message,
          alert_title: "Failed!",
          alert_type: "error",
        }));
        scrollToTarget();
      }
    }
  };

  const getCategoryData = async () => {
    setLoading(true);
    try {
      const response = await getAdminCategory();
      if (response) {
        if (response.success === true) {
          setCategoryData(response.data);
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
      setCategoryData([]);
    } finally {
      setLoading(false);
    }
  };

  // Steppers //
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setBasicFormData([]);
    setProjectId(null);
    setImages([]);
    setProductDescription("");
    setAlertData({
      alert_show: false,
      alert_message: "",
      alert_title: "",
      alert_type: "",
    });

    setActiveStep(0);
  };

  // Steppers //

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <TopAdminBarComponents />
      <AdminSideMenuComponents />

      <Box
        sx={{ marginTop: 10, display: "flex", width: "80%" }}
        display="flex"
        justifyContent="left"
        alignItems="left"
        minHeight="80vh"
      >
        {loading ? (
          <CircularProgress color="primary" size={60} thickness={5} />
        ) : (
          <Box sx={{ width: "90%", justifyContent: "center", marginLeft: 5 }}>
            <AlertComponent
              show={alertData.alert_show}
              severity={alertData.alert_type}
              variant="filled"
              color={alertData.alert_type}
              alerttitle={alertData.alert_title}
              alertmessagetext={alertData.alert_message}
            />
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};

                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  Great! Project has been created successfully!
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />

                  <ButtonComponent
                    buttonLabel="Create Another Project"
                    buttonColor="primary"
                    buttonSize="large"
                    buttonVariant="contained"
                    clickHandler={handleReset}
                  />

                  <ButtonComponent
                    buttonLabel="Go to Projects"
                    buttonColor="secondary"
                    buttonSize="large"
                    buttonVariant="contained"
                    clickHandler={cancelForm}
                  />
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {activeStep === 0 && (
                  <Box component="form" noValidate sx={{ width: "75%" }}>
                    <TextInputComponent
                      margin="normal"
                      required
                      fullWidth
                      id="project_name"
                      label="Project Title"
                      name="project_name"
                      autoComplete="project_name"
                      autoFocus
                      handleChange={handleFieldChange}
                      value={basicFormData.project_name}
                    />

                    <Select
                      labelId="demo-simple-select-label"
                      id="category_id"
                      value={basicFormData.category_id}
                      label="Project Category"
                      fullWidth
                      onChange={handleFieldChange}
                      name="category_id"
                    >
                      {categoryData.map((category) => (
                        <MenuItem key={category.id} value={category.id}>
                          {category.name}
                        </MenuItem>
                      ))}
                    </Select>

                    <TextareaComponent
                      maxRows={100}
                      minRows={5}
                      txtname="project_short_description"
                      txtid="project_short_description"
                      ariaLabel="maximum height"
                      placeHolder="Enter short Description"
                      defaultSetValue={basicFormData.project_short_description}
                      handleChange={handleFieldChange}
                      txtvalue={basicFormData.project_short_description}
                    />

                    <TextInputComponent
                      margin="normal"
                      required
                      fullWidth
                      name="project_technology"
                      label="Project Technology"
                      id="project_technology"
                      multiline
                      rows={4}
                      variant="outlined"
                      autoComplete="project_technology"
                      handleChange={handleFieldChange}
                      value={basicFormData.project_technology}
                    />

                    <TextInputComponent
                      margin="normal"
                      required
                      fullWidth
                      name="completed_duration"
                      label="Completed Duration"
                      id="completed_duration"
                      autoComplete="completed_duration"
                      handleChange={handleFieldChange}
                      value={basicFormData.completed_duration}
                    />

                    <TextInputComponent
                      margin="normal"
                      required
                      fullWidth
                      name="display_order"
                      label="Display Order"
                      id="display_order"
                      autoComplete="display_order"
                      handleChange={handleFieldChange}
                      value={basicFormData.display_order}
                    />

                    <TexteditorComponent
                      editorValue={productDescription}
                      editorName="project_description"
                      editorId="project_description"
                      editorPlaceHolder="Enter Project Description"
                      handleChange={setProductDescription}
                      editorStyle={{ height: 300, marginBottom: 20 }}
                    />
                  </Box>
                )}

                {activeStep === 1 && (
                  <Box component="form" noValidate sx={{ width: "75%" }}>
                    <TextInputComponent
                      margin="normal"
                      required
                      fullWidth
                      id="meta_title"
                      label="Meta title"
                      name="meta_title"
                      autoComplete="meta_title"
                      autoFocus
                      handleChange={handleFieldChange}
                      value={basicFormData.meta_title}
                    />

                    <TextareaComponent
                      maxRows={100}
                      minRows={5}
                      txtname="meta_keywords"
                      txtid="meta_keywords"
                      ariaLabel="maximum height"
                      placeHolder="Enter meta keywords"
                      defaultSetValue={basicFormData.meta_keywords}
                      handleChange={handleFieldChange}
                      txtvalue={basicFormData.meta_keywords}
                    />

                    <TextInputComponent
                      margin="normal"
                      required
                      fullWidth
                      name="project_slug"
                      label="SEO friendly URL"
                      id="project_slug"
                      autoComplete="project_slug"
                      handleChange={handleFieldChange}
                      value={basicFormData.project_slug}
                    />
                  </Box>
                )}

                {activeStep === 2 && (
                  <Box component="form" noValidate sx={{ width: "75%" }}>
                    <MultipleImageUploadComponent
                      images={images}
                      handleImageChange={handleImageChange}
                      handleRemoveImage={handleRemoveImage}
                      imageName="images"
                      buttonText="Upload Project Images"
                      style={{
                        marginTop: 20,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    />
                  </Box>
                )}

                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <ButtonComponent
                    disabled={activeStep === 0}
                    buttonLabel="Back"
                    buttonColor="secondary"
                    buttonSize="large"
                    buttonVariant="contained"
                    clickHandler={handleBack}
                  />

                  <Box sx={{ flex: "1 1 auto" }} />

                  <ButtonComponent
                    buttonLabel={
                      activeStep === steps.length - 1 ? "Finish" : "Next"
                    }
                    buttonColor="primary"
                    buttonSize="large"
                    buttonVariant="contained"
                    clickHandler={submitUpdateForm}
                  />
                </Box>
              </React.Fragment>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}
export default AdminAddProjectData;
