import { attr } from '@ember-data/model';
import ContentModel from './content';

export default class PostModel extends ContentModel {
  @attr('string') title;
}
