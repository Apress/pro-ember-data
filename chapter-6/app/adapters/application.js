// Toggle these depending on if you want to see the application
// working with a REST API or Local Storage
// import Adapter from './my-rest';
import Adapter from './local-storage';

export default class ApplicationAdapter extends Adapter {
  namespace = 'api';
}
