const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Welcome to my website')
})

app.get('/about', (req, res) => {
    res.send('This is the about page')
})

app.get('/contact', (req, res) => {
    res.send('Contact me at rishabh@email.com')
})

app.get('/instagram', (req, res) => {
    res.send('This is my Instagram page')
})

app.get('/user/:name', (req, res) => {
    const username = req.params.name
    res.send(`Hello ${username}`)
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})