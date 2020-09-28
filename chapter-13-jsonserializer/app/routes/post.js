import Route from '@ember/routing/route';

export default class PostRoute extends Route {
  model({ id }) {
    return this.store.peekRecord('post', id);
  }
  afterModel(model) {
    if (!model) {
      this.transitionTo('comments');
    }
  }
}
