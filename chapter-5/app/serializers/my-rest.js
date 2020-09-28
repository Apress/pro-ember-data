import Serializer from '@ember-data/serializer';
import { pluralize } from 'ember-inflector';

export default class MyRESTSerializer extends Serializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let { modelName } = primaryModelClass;
    let pluralizedModelName = pluralize(modelName);

    if (Array.isArray(payload[pluralizedModelName])) {
      return {
        data: payload[pluralizedModelName].map((resource) => {
          return this.normalize(primaryModelClass, resource);
        })
      };
    }

    return {
      data: this.normalize(primaryModelClass, payload[modelName])
    };
  }

  normalize(typeClass, hash) {
    return {
      id: hash.id,
      type: typeClass.modelName,
      attributes: hash
    };
  }

  serializeIntoHash(hash, typeClass, snapshot) {
    hash[typeClass.modelName] = this.serialize(snapshot);
  }

  serialize(snapshot) {
    let serializedData = {};

    if (snapshot.id) {
      serializedData.id = snapshot.id;
    }

    snapshot.eachAttribute((name) => {
      serializedData[name] = snapshot.attr(name);
    });

    return serializedData;
  }
}
