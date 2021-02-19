const router = require('express').Router()
const Controller = require ('../controllers/Controller')

router.post('/register', Controller.register)
router.get('/story',Controller.getStory)
router.post('/story',Controller.postStory)

module.exports = router