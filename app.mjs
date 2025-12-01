import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/api/classData', (req, res) => {
    res.sendFile('stuData.json');
  })

app.listen(3000)