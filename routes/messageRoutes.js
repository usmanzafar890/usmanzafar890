const express = require('express');
const { getMessages, createMessage, updateMessage, deleteMessage } = require('../controllers/messageController');

const router = express.Router();

router.get('/', getMessages);
router.post('/', createMessage);
router.put('/:id', updateMessage);
router.delete('/:id', deleteMessage);

module.exports = router;
