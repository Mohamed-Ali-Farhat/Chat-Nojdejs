var express = require('express');
var router = express.Router();
var validation= require('../middleware/validation')
var {  findAllMessages, createMessage, displayUpdateForm, updateMessage, deleteMessage,likesMessage,findCreate  } = require('../services/commentService')

router.get('/list', findAllMessages);

router.get('/create',findCreate)
router.post('/create', createMessage);

router.get('/update/:id', displayUpdateForm);
router.post('/update/:id', updateMessage);

router.get('/delete/:id', deleteMessage);
// Route for incrementing likes
router.get('/like/:messageId',likesMessage );
module.exports = router;



