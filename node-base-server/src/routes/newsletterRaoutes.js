const express = require('express');
const router = express.Router();
const { getNesletterEmails,
    addNewsletterEmail,
    deleteNewsletterEmail } = require('../controllers/newsletterController');
const auth = require('../middlewares/auth');

router.get('/newsletters/allpages', auth, getNesletterEmails);

module.exports = router;