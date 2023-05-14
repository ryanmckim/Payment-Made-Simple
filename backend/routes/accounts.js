const express = require('express')
const router = express.Router()

// Creating user info (only should be called when user is created)
router.post('/', (req, res) => {

})

// Displaying user info
router.get('/:id', (req, res) => {

})

// Updating user info
router.patch()

module.exports = router