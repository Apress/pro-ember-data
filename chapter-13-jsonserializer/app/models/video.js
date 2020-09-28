import { attr } from '@ember-data/model';
import ContentModel from './content';

export default class VideoModel extends ContentModel {
  @attr('string') title;
}
