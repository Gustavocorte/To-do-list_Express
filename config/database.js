const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/todo-list', {useNewUrlParser: true, useUnifiedTopoLogy: true})
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.log(err))