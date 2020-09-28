import RESTSerializer from '@ember-data/serializer/rest';
import { underscore } from '@ember/string';
import { pluralize } from 'ember-inflector';

export default class ApplicationSerializer extends RESTSerializer {
  keyForAttribute(attr) {
    return underscore(attr);
  }

  payloadKeyFromModelName(modelName) {
    let rootKey = super.payloadKeyFromModelName(modelName);
    return pluralize(rootKey);
  }
}
