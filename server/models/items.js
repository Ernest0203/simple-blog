const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ItemSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
  comments: [{
    name: String,
    text: String
  }]
}, {
  toJSON: { virtuals: true },
  }
)

Items = mongoose.model('items', ItemSchema);

Items.schema
.virtual('formattedDate')
.get(function () {
  return formatDate(this.date);
});

function formatDate(date) {
  let day = date.getDate();
  if (day < 10) day = '0' + day;

  let month = date.getMonth() + 1;
  if (month < 10) month = '0' + month;

  let year = date.getFullYear() % 100;
  if (year < 10) year = '0' + year;

  let hour = date.getHours();
  let minutes = date.getMinutes();

  return `${day}.${month}.${year} ${hour}:${minutes}`;
}

module.exports = Items; 