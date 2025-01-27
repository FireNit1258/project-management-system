require('dotenv').config()
const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const projectRoutes = require('./projectRoutes');
const uploadRoute = require('./uploadRoute');
const settingsRoutes = require('./settingsRoutes');
const pagesRoutes = require('./pagesRoutes');
const newsletterRaoutes = require('./newsletterRaoutes');
const apiRoutes = require('./apiRoutes');


router.use('/', userRoutes);      
router.use('/', categoryRoutes);   
router.use('/', uploadRoute);    
router.use('/', projectRoutes);    

router.use('/', settingsRoutes);    
router.use('/', pagesRoutes);    
router.use('/', newsletterRaoutes);  

router.use('/api/'+process.env.API_VERSION+'/', apiRoutes);   



module.exports = router;
