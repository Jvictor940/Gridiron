const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');
const athlete = require('./routes/athlete');
const user = require('./routes/user')


dotenv.config({ path: './config/config.env' })

const app = express();

// parse application/json
app.use(bodyParser.json())

app.use('/athlete', athlete)
app.use('/user', user)

// Reads from our config.env file || fallback if it can't read our file 
const PORT = process.env.PORT || 5001

const server = app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})