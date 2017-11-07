import path from'path'
import express from 'express'
import 'babel-polyfill'

const app = express()
const ENV = process.env.NODE_ENV || 'development'
const envPath = path.join(__dirname, './configs/env/' + ENV)

require(envPath)(app)
require('./routes/')(app)

app.use('/assets', express.static(__dirname +'/public'));

app.listen(app.get('port'), () => {
	console.log('Express has been started')
})