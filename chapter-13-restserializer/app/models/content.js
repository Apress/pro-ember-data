import Model, { attr, hasMany } from '@ember-data/model';

export default class ContentModel extends Model {
  @attr('string') title;
  @hasMany('comment', { async: false }) comments;
}
