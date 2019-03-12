const express = require('express');
const mongoose = require('mongoose');
const parser = require('body-parser');
const items = require('routes/api/items');
const app = express();

app.use(parser.json());
app.use('/api/items', items);
mongoose.connect("http://localhost:27017/mern")
    .then(() => console.log('mongo connected'))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));


