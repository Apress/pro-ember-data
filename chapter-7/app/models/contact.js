import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class ContactModel extends Model {
  @attr('string') name;
  @hasMany('pet', { async: true }) pets;
  @belongsTo('company', { async: true }) company;
}
