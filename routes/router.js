const express = require('express');
const router = express.Router();
const csg = require('../controller/cjController');

router.get('/', csg.main);
router.get('/abc', csg.asd)
router.get('/def', csg.zxc);
router.get('/ghi', csg.qwe);
router.get('/jkl', csg.vbn);


module.exports = router;