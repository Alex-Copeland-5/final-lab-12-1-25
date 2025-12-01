import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/api/classData', (req, res) => {
    res.send('classData goes here')
  })

app.listen(3000)