import Model, { attr, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') name;
  @hasMany('product', {
    polymorphic: true,
    async: false
  })
  purchasedProducts;
}
