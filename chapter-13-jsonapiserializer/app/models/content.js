import Model, { hasMany } from '@ember-data/model';

export default class ContentModel extends Model {
  @hasMany('comment', { async: false }) comments;
}
