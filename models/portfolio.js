var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var slugify = require('../functions').slugify;

var PortfolioSchema = new Schema({
  name: String,
  slug: {
    type: String,
    unique: true
  },
  value: Number,
  cash: Number,
  overallReturn: Number,
  created: {
    type: Date,
    default: Date.now
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }/*,
  transcations: [{
    type: Schema.Types.ObjectId,
    ref: 'Transcation'
  }] */
});

PortfolioSchema.pre('save', function(next) {
  this.slug = slugify(this.name);

  next();
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);