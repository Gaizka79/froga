const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

const routes = require('./routes');

app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/',routes)

app.listen(PORT, console.log(`Server listening on port ${PORT}.......`))