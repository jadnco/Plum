Plum.Portfolio = DS.Model.extend({
  name: DS.attr(),
  slug: DS.attr(),
  value: DS.attr(),
  cash: DS.attr(),
  overallReturn: DS.attr(),
  created: DS.attr(),
  owner: DS.belongsTo('user')/*,
  transcations: [{
    type: Schema.Types.ObjectId,
    ref: 'Transcation'
  }] */
});