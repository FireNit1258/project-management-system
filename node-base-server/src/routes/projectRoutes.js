const express = require('express');
const router = express.Router();
const {getProjects,adminSingleProject,addProject,updateProject,deleteProject,addProjectImages,projectImages,getFrontProjects } = require('../controllers/projectController');

const auth = require('../middlewares/auth');

router.get('/projects/allprojects',auth, getProjects);
router.post('/projects/addproject',auth, addProject);
router.get('/projects/admin_single_project/:id',auth, adminSingleProject);
router.post('/projects/update_single_project',auth, updateProject);
router.post('/projects/delete_project',auth, deleteProject);
router.post('/projects/addimages',auth, addProjectImages);
router.get('/projects/images/:id',auth, projectImages);



module.exports = router;