const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');
const app = express();

app.use(express.json());
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));
const db = config.get('mongoURI');
mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
})
    .then(() => console.log('mongo connected'))
    .catch(err => console.log(err));

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    });
}
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));


