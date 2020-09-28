import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class LibraryRoute extends Route {
  model() {
    return hash({
      courses: this.store.findAll('course'),
      books: this.store.findAll('book'),
      user: this.store.findRecord('user', 1),
    });
  }
}
