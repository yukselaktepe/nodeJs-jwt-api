var express = require('express');
var router = express.Router();
var ctrlApi = require('../app/controller/userApiController');

router.get('/GetToken', ctrlApi.Get);
router.post('/UserSave',ctrlApi.verifyToken, ctrlApi.Post);
//.
//.
//.

module.exports = router;