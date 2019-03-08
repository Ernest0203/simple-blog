const express = require('express');
const mongoose = require('mongoose');

const items = require('./routes/items');
const db = 'mongodb://ernest2332:nballstar0203@ds263295.mlab.com:63295/blog';

const app = express();

mongoose.connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use(express.json());

app.use('/items', items);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve()(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 2000;
app.listen(port, () => console.log(`Server started on port ${port}...`));

