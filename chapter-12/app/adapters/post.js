import RedditAdapter from './reddit';

export default class PostAdapter extends RedditAdapter {
  namespace = 'r';

  urlForQuery(query) {
    let { subreddit } = query;
    delete query.subreddit;
    return `${this.host}/${this.namespace}/${subreddit}.json`;
  }
}
