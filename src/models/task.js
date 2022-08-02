const mongoose = require('mongoose')


const taskSchema = mongoose.Schema({
    name: {type: String, require: true},
    done: {type: Boolean, require: false},
    checklist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'checklist',
        require: true
    }
})

module.exports = mongoose.model('task', taskSchema)