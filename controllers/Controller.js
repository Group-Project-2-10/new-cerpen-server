const {User} = require ('../models/index')
const {Story} = require ('../models/index')

class Controller { 
    static register (req,res,next) { 
        const newUser = { 
            username : req.body.username
        }
        User.create(newUser) 
            .then((user) => { 
                res.status(201).json(user)
            }) 
            .catch((err) => { 
                res.send(err)
            })
    } 

    static getStory (req,res,next) { 
        Story.findAll({ 
            order : [['createdAt','DESC']]
        })
            .then((stories) => { 
                res.status(200).json(stories)
            }) 
            .catch((err) => { 
                res.send(err)
            })
    } 

    static postStory (req,res,next) { 
        const newStory = { 
            title: req.body.title,
            sentences: req.body.sentences,
            UserId: req.body.UserId
        }
        const obj = {}
        Story.create(newStory)
            .then((story) => { 
                obj.story = story
                return User.findByPk(newStory.UserId)
                
            })
            .then((response) => {
                console.log(response)
                obj.user = response
                res.status(201).json(obj)
            })
            .catch((err) => { 
                res.send(err)
            })
    }
} 

module.exports = Controller