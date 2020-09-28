import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class CommentsRoute extends Route {
  async model() {
    return hash({
      videos: this.store.findAll('video'),
      posts: this.store.findAll('post'),
      comments: this.store.findAll('comment')
    });
  }
}
