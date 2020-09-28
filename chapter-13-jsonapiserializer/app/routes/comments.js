import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class CommentsRoute extends Route {
  async model() {
    return hash({
      comments: this.store.findAll('comment')
    });
  }
}
