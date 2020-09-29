const { urlencoded } = require('express')
const express = require('express')
const morgan = require('morgan')

const app = express()

app.set('view engine', 'ejs')

app.use(morgan('dev'))
app.use(express(urlencoded({ extended: true })))
app.use(express.json())

app.get('/about', (req, res) => {
    res.render('pages/about', {title: 'Awesome about page'})
})

app.get('/help', (req, res) => {
    res.render('pages/help')
})

app.get('/', (req, res) => {
    let post = {
        title: 'Test Title',
        body: 'Test Body',
        published: false
    }

    let posts = [
        { title: 'Post 1', author: 's.rakib' },
        { title: 'Post 2', author: 's.rakib' }
    ]
    res.render('pages/index', { title: 'EJS is an Awesome Template Engine', post, posts })
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`)
})