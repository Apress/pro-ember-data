import ProductModel from './product';
import { attr } from '@ember-data/model';

export default class CourseModel extends ProductModel {
  @attr('string') length;

  get details() {
    return `Length: ${this.length}`;
  }
}
