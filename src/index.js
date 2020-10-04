const express = require('express')
const cors = require('cors')
const controllersRouter = require('./controllers')

const app = express()
const router = express.Router()

router.use(express.json())
router.use(express.urlencoded({ extended: true }))
router.use(cors())
router.use('/api', controllersRouter)

app.use(router)
app.listen(5000, () => {
    console.log('Servidor escutando na porta 5000')
})