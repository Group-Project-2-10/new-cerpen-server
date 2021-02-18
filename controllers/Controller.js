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
            order : [['createdAt','DESC']],
            limit : 3
        }
        )
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
            sentences: req.body.sentences
        } 
        Story.create(newStory)
            .then((story) => { 
                res.status(201).json(story)
            }) 
            .catch((err) => { 
                res.send(err)
            })
    }
} 

module.exports = Controller