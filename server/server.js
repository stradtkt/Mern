const express = require('express');
const mongoose = require('mongoose');
const parser = require('body-parser');
const items = require('./routes/api/items');
const app = express();

app.use(parser.json());
app.use('/api/items', items);
const db = require('./config/database').mongoURI;
mongoose.connect(db)
    .then(() => console.log('mongo connected'))
    .catch(err => console.log(err));
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));


