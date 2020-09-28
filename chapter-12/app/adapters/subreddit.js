import RedditAdapter from './reddit';

export default class SubredditAdapter extends RedditAdapter {
  namespace = 'api';

  urlForFindRecord(id) {
    return `${this.host}/${this.namespace}/info.json?id=${id}`;
  }
}
