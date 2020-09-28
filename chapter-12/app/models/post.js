import Model, { attr, belongsTo } from '@ember-data/model';

export default class PostModel extends Model {
  @attr('string') title;
  @attr('string') url;
  @attr('number') numComments;
  @belongsTo('subreddit', { async: true }) subreddit;
}
