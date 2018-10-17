let express = require('express')
let app =express()
let personRoute = require('./routes/person')
let path = require('path')
let bodyParser = require('body-parser')
let customerRoute = require('./routes/customer')
let locationRoute = require('./routes/locations')


app.use(bodyParser.json())

/* middle ware*/
app.use((req,res,next)=> {
  console.log(`${new Date().toString()} => ${req.originalUrl}`,req.body)
  next()
})

app.use(personRoute)
app.use(customerRoute)
app.use(locationRoute)

app.use(express.static('public'))

/* error handler 404 */
app.use((req,res,next)=> {
  res.status(404).send('We think you lost')
})


/* error handler 500 */
app.use((err,req,res,next)=> {
  console.error(err.stack)
  res.sendFile(path.join(__dirname),'..public/500.html')
})


const PORT = process.env.PORT || 3000
app.listen(PORT ,() => console.info(`Server as started on ${PORT}`))
