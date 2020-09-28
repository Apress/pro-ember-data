import JSONSerializer from '@ember-data/serializer/json';

export default class ApplicationSerializer extends JSONSerializer {
  serializePolymorphicType(snapshot, json, relationship) {
    super.serializePolymorphicType(snapshot, json, relationship);

    json[`${relationship.key}Type`] = snapshot.record
      .belongsTo('content')
      .value().constructor.modelName;
  }
}
