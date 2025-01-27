const express = require('express');
const router = express.Router();
const {getUsers,addUser,login,forgotPassword,resetPassword,userProfile,userActivity,verifyOtp,adminUserProfile,updateUserProfile,deleteUserProfile,updatePassword } = require('../controllers/userController');
const auth = require('../middlewares/auth');

router.get('/user/users', auth, getUsers);
router.post('/user/adduser',auth, addUser);
router.post('/user/login', login);
router.post('/user/forgot_password', forgotPassword);
router.post('/user/verify_otp', verifyOtp);
router.post('/user/reset_password', resetPassword);
router.post('/user/user_profile', auth, userProfile);
router.post('/user/user_activity', auth, userActivity);
router.get('/user/admin_user_profile/:id',auth,adminUserProfile);
router.post('/user/update_user_profile',auth,updateUserProfile);
router.post('/user/delete_user_profile',auth,deleteUserProfile);
router.post('/user/update_password',auth,updatePassword);


module.exports = router;