import Adapter from '@ember-data/adapter';
import { resolve, reject } from 'rsvp';
import { pluralize } from 'ember-inflector';

export default class LocalStorageAdapter extends Adapter {
  _getDataFromStorage() {
    let jsonString = localStorage.getItem(this.namespace);

    if (!jsonString) {
      return {};
    }

    return JSON.parse(jsonString);
  }

  findAll(store, type) {
    let json = this._getDataFromStorage();
    let { modelName } = type;
    let storageKeyForModelName = pluralize(modelName);
    let resources = json[storageKeyForModelName];

    if (!resources) {
      json[storageKeyForModelName] = [];
    }

    return resolve(json);
  }

  findRecord(store, type, id, snapshot) {
    let json = this._getDataFromStorage();
    let { modelName } = type;
    let storageKeyForModelName = pluralize(modelName);
    let resources = json[storageKeyForModelName];

    if (!resources) {
      return reject();
    }

    let foundResource = resources.find((resource) => {
      return resource.id === snapshot.id;
    });

    if (foundResource) {
      let payload = {};
      payload[modelName] = foundResource;
      return resolve(payload);
    }

    return reject();
  }

  createRecord(store, type, snapshot) {
    let { modelName } = type;
    let data = {};
    let serializer = store.serializerFor(modelName);

    serializer.serializeIntoHash(data, type, snapshot);

    let resource = data[modelName];
    let json = this._getDataFromStorage();
    let storageKeyForModelName = pluralize(modelName);
    let resources = json[storageKeyForModelName];

    if (resources) {
      let lastResource = resources[resources.length - 1];
      resource.id = String(Number(lastResource.id) + 1);
      resources.push(resource);
    } else {
      resource.id = '1';
      json[storageKeyForModelName] = [resource];
    }

    localStorage.setItem(this.namespace, JSON.stringify(json));
    return resolve(data);
  }

  updateRecord(store, type, snapshot) {
    let { modelName } = type;
    let data = {};
    let serializer = store.serializerFor(modelName);

    serializer.serializeIntoHash(data, type, snapshot);

    let storageKeyForModelName = pluralize(modelName);
    let json = this._getDataFromStorage();
    let resources = json[storageKeyForModelName];

    if (!resources) {
      return reject();
    }

    let resourceToUpdate = json[storageKeyForModelName].find((resource) => {
      return resource.id === snapshot.id;
    });

    if (resourceToUpdate) {
      let resourceUpdates = data[modelName];
      Object.assign(resourceToUpdate, resourceUpdates);
      localStorage.setItem(this.namespace, JSON.stringify(json));
      return resolve(data);
    }

    return reject();
  }

  deleteRecord(store, type, snapshot) {
    let json = this._getDataFromStorage();
    let { modelName } = type;
    let storageKeyForModelName = pluralize(modelName);
    let resources = json[storageKeyForModelName];

    if (!resources) {
      return reject();
    }

    let indexOfResourceToDelete = resources.findIndex((resource) => {
      return resource.id === snapshot.id;
    });

    if (indexOfResourceToDelete > -1) {
      resources.splice(indexOfResourceToDelete, 1);

      if (resources.length === 0) {
        delete json[storageKeyForModelName];
      }

      localStorage.setItem(this.namespace, JSON.stringify(json));
      return resolve();
    }

    return reject();
  }
}
