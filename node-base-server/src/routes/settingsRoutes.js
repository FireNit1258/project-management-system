const express = require('express');
const router = express.Router();
const {getSettings,updateSettings} = require('../controllers/settingController');
const auth = require('../middlewares/auth');

router.post('/settings/setting', auth, getSettings);
router.post('/settings/update_settings', auth, updateSettings);

module.exports = router;