const express = require('express');
const path = require('path')
const checklistsRouter = require('./src/routes/checklist')
const rootRouter = require('./src/routes/index')
require('./config/database.js')




const app = express();
app.use(express.json());

app.use(express.static(paht.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')

app.use('/', rootRouter)
app.use('/checklist', checklistsRouter)

app.listen(3000, () => {
    console.log("Servidor foi iniciado")
})