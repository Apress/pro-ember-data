import Route from '@ember/routing/route';

export default class RedditRoute extends Route {
  model() {
    return this.store.query('post', {
      subreddit: 'emberjs'
    });
  }
}
