import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class LibraryRoute extends Route {
  model() {
    return hash({
      products: this.store.findAll('product'),
      user: this.store.findRecord('user', 1)
    });
  }
}
