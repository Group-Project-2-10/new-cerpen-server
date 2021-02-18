const {User} = require ('../models/index')
const {Story} = require ('../models/index')

class Controller { 
    static register (req,res,next) { 
        console.log('register')
    } 

    static getStory (req,res,next) { 
        console.log('get story')
    } 

    static postStory (req,res,next) { 
        console.log('post story')
    }
} 

module.exports = Controller