import axios from "axios";
import { isAdminLoggedInToken } from "../utils/helper";
const token = isAdminLoggedInToken();
const API_BASE_URL = process.env.REACT_APP_API_URL;
console.log("API_BASE_URL", API_BASE_URL);


const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      console.log(error);
      localStorage.removeItem('authToken');
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);



// Handle API errors
const handleError = (error) => {
  if (error.response) {
    // Server responded with a status other than 200
    console.error("Error Response:", error.response.data);
    return error.response.data;
  } else if (error.request) {
    // Request made but no response received
    console.error("Error Request:", error.request);
    return { message: "No response received from the server." };
  } else {
    // Something else triggered the error
    console.error("Error Message:", error.message);
    return { message: error.message };
  }
};

// Handle API errors
const handleResponse = (response) => {
  return response;
};

// API call to get all users
const getApi = async () => {
  try {
    const response = await axiosInstance.get("/users");
    return handleResponse(response.data);
  } catch (error) {
    return handleError(error);
  }
};

const getAdminUsers = async () => {

  console.log('token',token)
  try {
    const response = await axiosInstance.get("/user/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return handleResponse(response.data);
  } catch (error) {
    return handleError(error);
  }
};

const getAdminUserProfile = async (id) => {
  try {
    const response = await axiosInstance.get("/user/admin_user_profile/" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return handleResponse(response.data);
  } catch (error) {
    return handleError(error);
  }
};

const updateAdminUserProfile = async (apiData) => {
  try {
    const response = await axiosInstance.post(
      "/user/update_user_profile",
      apiData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return handleResponse(response.data);
  } catch (error) {
    return handleError(error);
  }
};

const addAdminUserProfile = async (apiData) => {
  try {
    const response = await axiosInstance.post("/user/adduser", apiData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return handleResponse(response.data);
  } catch (error) {
    return handleError(error);
  }
};

const deleteAdminUsers = async (apiData) => {
  try {
    const response = await axiosInstance.post(
      "/user/delete_user_profile",
      apiData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return handleResponse(response.data);
  } catch (error) {
    return handleError(error);
  }
};

// API call to create a new user
const adminLogin = async (userData) => {
  try {
    const response = await axiosInstance.post("/user/login", userData);
    return handleResponse(response.data);
  } catch (error) {
    return handleError(error);
  }
};

// API call to delete a user by ID
const deleteApi = async (id) => {
  try {
    const response = await axiosInstance.delete(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return handleResponse(response.data);
  } catch (error) {
    return handleError(error);
  }
};

const getAdminCategory = async () => {
  try {
    const response = await axiosInstance.get("/category/allcategory", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return handleResponse(response.data);
  } catch (error) {
    return handleError(error);
  }
};

const getAdminSingleCategory = async (id) => {
  try {
    const response = await axiosInstance.get(
      "/category/admin_single_category/" + id,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return handleResponse(response.data);
  } catch (error) {
    return handleError(error);
  }
};

const addAdminCategory = async (apiData, image) => {
  // Create a FormData object to hold the image file

  const formData = new FormData();

  formData.append("image", image);
  formData.append("name", apiData.name);
  formData.append("parent_id", apiData.parent_id);
  formData.append("display_order", apiData.display_order);
  console.log("formData", formData);
  try {
    const response = await axios.post(
      API_BASE_URL + "category/addcategory",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return handleResponse(response.data);
  } catch (error) {
    return handleError(error);
  }
};

const updateAdminCategory = async (apiData, image) => {
  // Create a FormData object to hold the image file

  const formData = new FormData();
  formData.append("id", apiData.id);
  if (image) {
    formData.append("image", image);
  }
  formData.append("name", apiData.name);
  formData.append("parent_id", apiData.parent_id);
  formData.append("display_order", apiData.display_order);

  try {
    const response = await axios.post(
      API_BASE_URL + "category/update_single_category",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return handleResponse(response.data);
  } catch (error) {
    return handleError(error);
  }
};

const deleteAdminCategory = async (apiData) => {
  try {
    const response = await axiosInstance.post(
      "/category/delete_category",
      apiData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return handleResponse(response.data);
  } catch (error) {
    return handleError(error);
  }
};

const getAdminProjects = async () => {
  try {
    const response = await axiosInstance.get("/projects/allprojects", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return handleResponse(response.data);
  } catch (error) {
    return handleError(error);
  }
};

const addAdminProject = async (apiData) => {
  try {
    const response = await axiosInstance.post("/projects/addproject", apiData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return handleResponse(response.data);
  } catch (error) {
    return handleError(error);
  }
};

const addAdminProjectImages = async (apiData, images) => {
  const formData = new FormData();

  formData.append("id", apiData.id);
  images.forEach((file) => {
    formData.append("images", file.file); // Append each file with the same field name 'files'
  });

  console.log("formData", formData);

  try {
    const response = await axios.post(
      API_BASE_URL + "projects/addimages",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return handleResponse(response.data);
  } catch (error) {
    return handleError(error);
  }
};

const getAdminSingleProject = async (id) => {
  try {
    const response = await axiosInstance.get(
      "/projects/admin_single_project/" + id,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return handleResponse(response.data);
  } catch (error) {
    return handleError(error);
  }
};

const getAdminSingleProjectImages = async (id) => {
  try {
    const response = await axiosInstance.get("/projects/images/" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return handleResponse(response.data);
  } catch (error) {
    return handleError(error);
  }
};

const getWebsiteSettings = async (apiData) => {
  try {
    const response = await axiosInstance.post("/settings/setting", apiData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return handleResponse(response.data);
  } catch (error) {
    return handleError(error);
  }
};

const updateWebsiteSettings = async (apiData) => {
  try {
    const response = await axiosInstance.post(
      "/settings/update_settings",
      apiData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return handleResponse(response.data);
  } catch (error) {
    return handleError(error);
  }
};

const updateUserPasswordApi = async (apiData) => {
  try {
    const response = await axiosInstance.post(
      "/user/update_password",
      apiData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return handleResponse(response.data);
  } catch (error) {
    return handleError(error);
  }
};


const getFrontWebsiteSettings = async () => {
  try {
    const response = await axiosInstance.get("/api/v1/website_setting_data");
    return handleResponse(response.data);
  } catch (error) {
    return handleError(error);
  }
};

const getAdminPages = async () => {

  console.log('token',token)
  try {
    const response = await axiosInstance.get("/pages/allpages", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return handleResponse(response.data);
  } catch (error) {
    return handleError(error);
  }
};


const addAdminPage = async (apiData) => {
  try {
    const response = await axiosInstance.post("/pages/addpage", apiData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return handleResponse(response.data);
  } catch (error) {
    return handleError(error);
  }
};

const getAdminSinglePage = async (id) => {
  try {
    const response = await axiosInstance.get(
      "/pages/page_detail/" + id,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return handleResponse(response.data);
  } catch (error) {
    return handleError(error);
  }
};

const updateAdminPage = async (apiData) => {
  try {
    const response = await axiosInstance.post(
      "/pages/update_page",
      apiData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return handleResponse(response.data);
  } catch (error) {
    return handleError(error);
  }
};

const deleteAdminPage = async (apiData) => {
  try {
    const response = await axiosInstance.post(
      "/pages/delete_page",
      apiData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return handleResponse(response.data);
  } catch (error) {
    return handleError(error);
  }
};



const getFrontProjects = async (filter) => {
  try {
    const response = await axiosInstance.get("/api/v1/get_front_projects/"+filter);
    return handleResponse(response.data);
  } catch (error) {
    return handleError(error);
  }
};

const getFrontCategories = async () => {
  try {
    const response = await axiosInstance.get("/api/v1/get_front_category");
    return handleResponse(response.data);
  } catch (error) {
    return handleError(error);
  }
};







// API call to create a new user
const emailSubscription = async (userData) => {
  try {
    const response = await axiosInstance.post("/api/v1/subscribe_newsletter", userData);
    return handleResponse(response.data);
  } catch (error) {
    return handleError(error);
  }
};

const getFrontPage = async (id) => {
  try {
    const response = await axiosInstance.get("/api/v1/get_front_page/"+id);
    return handleResponse(response.data);
  } catch (error) {
    return handleError(error);
  }
};

const getFrontAllCategory = async () => {
  try {
    const response = await axiosInstance.get("/api/v1/get_front_category_all");
    return handleResponse(response.data);
  } catch (error) {
    return handleError(error);
  }
};

// API call to create a new user
const contactUsSubmit = async (userData) => {
  try {
    const response = await axiosInstance.post("/api/v1/submit_contact_us", userData);
    return handleResponse(response.data);
  } catch (error) {
    return handleError(error);
  }
};


// Exporting all API services as functions
export {
  getApi,
  adminLogin,
  deleteApi,
  getAdminUsers,
  getAdminUserProfile,
  updateAdminUserProfile,
  addAdminUserProfile,
  deleteAdminUsers,
  getAdminCategory,
  addAdminCategory,
  getAdminSingleCategory,
  updateAdminCategory,
  deleteAdminCategory,
  getAdminProjects,
  addAdminProject,
  addAdminProjectImages,
  getAdminSingleProject,
  getAdminSingleProjectImages,
  getWebsiteSettings,
  updateWebsiteSettings,
  updateUserPasswordApi,
  getFrontWebsiteSettings,
  getAdminPages,
  addAdminPage,
  getAdminSinglePage,
  updateAdminPage,
  deleteAdminPage,
  getFrontProjects,
  getFrontCategories,
  emailSubscription,
  getFrontPage,
  getFrontAllCategory,
  contactUsSubmit
};
