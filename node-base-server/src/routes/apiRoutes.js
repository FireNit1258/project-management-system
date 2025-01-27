const express = require('express');
const router = express.Router();
const {getFrontWebsiteSettings} = require('../controllers/settingController');
const {getFrontProjects} = require('../controllers/projectController');
const {getFrontCategory,getFrontAllCategory} = require('../controllers/categoryController');
const {addNewsletterEmail} = require('../controllers/newsletterController');
const {frontPageDetail} = require('../controllers/pagesController');
const {addContactRecords} = require('../controllers/contactController');



router.get('/website_setting_data', getFrontWebsiteSettings);
router.get('/get_front_projects/:filter', getFrontProjects);
router.get('/get_front_category', getFrontCategory);

router.post('/subscribe_newsletter', addNewsletterEmail);
router.get('/get_front_page/:id', frontPageDetail);
router.get('/get_front_category_all', getFrontAllCategory);

router.post('/submit_contact_us', addContactRecords);



module.exports = router;