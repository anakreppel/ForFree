const express = require('express');
const cors = require('cors');
const router = require('./router');
const path = require('path');
require('dotenv').config();

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);

app.listen(PORT, () => { console.log(`server running on PORT: ${PORT}`) });