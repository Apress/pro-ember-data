import RESTAdapter from '@ember-data/adapter/rest';

export default class RedditAdapter extends RESTAdapter {
  host = 'https://www.reddit.com';
}
