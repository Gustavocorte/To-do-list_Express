const express = require('express');
const checklistsRouter = require('./src/routes/checklist')
require('./config/database.js')

const app = express();
app.use(express.json());

app.use('/checklist', checklistsRouter)

app.listen(3000, () => {
    console.log("Servidor foi iniciado")
})