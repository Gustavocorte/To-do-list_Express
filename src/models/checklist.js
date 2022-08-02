const mongoose = require('mongoose')


const checklistSchema = mongoose.Schema({
    name: {type: String, require: true},
    tasks: [{
        type: mongoose.Types.ObjectId,
        ref: 'task'
    }]
})

module.exports = mongoose.model('Checklist', checklistSchema)