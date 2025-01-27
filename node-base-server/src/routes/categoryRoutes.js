const express = require('express');
const router = express.Router();
const {getCategory,addCategory,adminSingleCategory,updateCategory,deleteCategory } = require('../controllers/categoryController');
const auth = require('../middlewares/auth');

router.get('/category/allcategory',auth, getCategory);
router.post('/category/addcategory',auth, addCategory);
router.get('/category/admin_single_category/:id',auth, adminSingleCategory);
router.post('/category/update_single_category',auth, updateCategory);
router.post('/category/delete_category',auth, deleteCategory);



module.exports = router;