const mongoose = require('mongoose')


const checklistSchema = mongoose.Schema({
    name: {type: String, require: true},
    task: [{
        task: mongoose.Types.ObjectId,
        ref: 'Task'
    }]
})

module.exports = mongoose.model('checklist', checklistSchema)