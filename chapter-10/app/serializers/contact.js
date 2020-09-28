import JSONSerializer from '@ember-data/serializer/json';

export default class ContactSerializer extends JSONSerializer {
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    return super.normalizeArrayResponse(
      store,
      primaryModelClass,
      payload.data,
      id,
      requestType
    );
  }

  serializeIntoHash(hash, type, snapshot, options) {
    hash.data = this.serialize(snapshot, options);
  }

  normalizeCreateRecordResponse(
    store,
    primaryModelClass,
    payload,
    id,
    requestType
  ) {
    return super.normalizeCreateRecordResponse(
      store,
      primaryModelClass,
      payload.data,
      id,
      requestType
    );
  }
}
