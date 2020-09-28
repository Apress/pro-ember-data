import Route from '@ember/routing/route';

export default class VideoRoute extends Route {
  model({ id }) {
    return this.store.peekRecord('video', id);
  }
  afterModel(model) {
    if (!model) {
      this.transitionTo('comments');
    }
  }
}
