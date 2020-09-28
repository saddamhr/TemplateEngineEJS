const { urlencoded } = require('express')
const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))
app.use(express(urlencoded({extended: true})))
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`Working on Template Engine`)
})

const PORT = process.env.PORT || 808

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`)
})