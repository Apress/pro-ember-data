import { attr } from '@ember-data/model';
import ContentModel from './content';

export default class VideoModel extends ContentModel {
  @attr('number') length;

  get details() {
    return `${this.length / 60} minutes`;
  }
}
