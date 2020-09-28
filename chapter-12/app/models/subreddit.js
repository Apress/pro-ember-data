import Model, { attr } from '@ember-data/model';

export default class SubredditModel extends Model {
  @attr('string') title;
  @attr('string') description;
  @attr('number') subscribers;
}
