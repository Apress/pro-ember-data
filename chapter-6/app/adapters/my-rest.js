import Adapter from '@ember-data/adapter';
import { pluralize } from 'ember-inflector';
import $ from 'jquery';

export default class MyRESTAdapter extends Adapter {
  findAll(store, type, sinceToken, snapshotRecordArray) {
    let url = `/${this.namespace}/${pluralize(type.modelName)}`;
    return $.get(url);
  }

  findRecord(store, type, id, snapshot) {
    let url = `/${this.namespace}/${pluralize(type.modelName)}/${id}`;
    return $.get(url);
  }

  createRecord(store, type, snapshot) {
    let url = `/${this.namespace}/${pluralize(type.modelName)}`;
    let data = {};
    let serializer = store.serializerFor(type.modelName);

    serializer.serializeIntoHash(data, type, snapshot);

    return $.ajax({
      type: 'POST',
      url,
      data: JSON.stringify(data),
    });
  }

  updateRecord(store, type, snapshot) {
    let url = `/${this.namespace}/${pluralize(type.modelName)}/${snapshot.id}`;
    let data = {};
    let serializer = store.serializerFor(type.modelName);

    serializer.serializeIntoHash(data, type, snapshot);

    return $.ajax({
      type: 'PUT',
      url,
      data: JSON.stringify(data),
    });
  }

  deleteRecord(store, type, snapshot) {
    let url = `/${this.namespace}/${pluralize(type.modelName)}/${snapshot.id}`;
    return $.ajax({
      type: 'DELETE',
      url,
    });
  }
}
