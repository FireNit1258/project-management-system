const express = require('express');
const router = express.Router();
const {getPages,addPage,adminPageDetail,updatePage,deletePage } = require('../controllers/pagesController');
const auth = require('../middlewares/auth');

router.get('/pages/allpages', auth, getPages);
router.post('/pages/addpage',auth, addPage);
router.get('/pages/page_detail/:id',auth,adminPageDetail);
router.post('/pages/update_page',auth,updatePage);
router.post('/pages/delete_page',auth,deletePage);


module.exports = router;