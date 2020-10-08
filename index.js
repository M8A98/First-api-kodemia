const express = require('express')
const app = express()

app.use(express.json())

const koders = [
  {
    id: 1,
    name: 'Mauro'
  },
  {
    id: 2,
    name: 'Lucho'
  },
  {
    id: 3,
    name: 'Haro'
  }
]

app.get('/koders', (req, res) => {
  res.json({
    success: true,
    message: 'All koders',
    data: {
      koders: koders
    }
  })
})

app.post('/koders', (req, res) => {
  // console.log(req)
  if (req.body.name && req.body.id) {
    const { name, id } = req.body
    const koder = { id, name }
    koders.push(koder)
    res.json({
      success: true,
      message: 'All koders',
      data: {
        koders
      }
    })
  } else {
    res.json({
      success: false,
      message: 'Missing data'
    })
  }
})

app.listen(8080, () => {
  console.log('Server is on')
})
