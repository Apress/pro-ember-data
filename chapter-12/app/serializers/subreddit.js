import JSONSerializer from '@ember-data/serializer/json';

export default class SubredditSerializer extends JSONSerializer {
  normalizeFindRecordResponse(
    store,
    primaryModelClass,
    payload,
    id,
    requestType
  ) {
    let resource = payload.data.children[0].data;
    resource.id = id;

    return super.normalizeFindRecordResponse(
      store,
      primaryModelClass,
      resource,
      id,
      requestType
    );
  }
}
