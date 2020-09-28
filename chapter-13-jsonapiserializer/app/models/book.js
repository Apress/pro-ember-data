import ProductModel from './product';
import { attr } from '@ember-data/model';

export default class BookModel extends ProductModel {
  @attr('number') pages;

  get details() {
    return `Pages: ${this.pages}`;
  }
}
