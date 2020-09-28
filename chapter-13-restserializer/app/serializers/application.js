import RESTSerializer from '@ember-data/serializer/rest';

export default class ApplicationSerializer extends RESTSerializer {
  // keyForPolymorphicType(key, typeClass, method) {
  //   return 'type';
  // }
  // serializePolymorphicType(snapshot, json, relationship) {
  //   super.serializePolymorphicType(snapshot, json, relationship);
  //   let { name } = relationship.meta;
  //   json[name] = {
  //     id: json[name],
  //     type: json[`${name}Type`]
  //   };
  //   delete json[`${name}Type`];
  // }
  // extractPolymorphicRelationship(
  //   relationshipType,
  //   relationshipHash,
  //   relationshipOptions
  // ) {
  //   if (typeof relationshipHash === 'string') {
  //     let [type, id] = relationshipHash.split(':');
  //     return { id, type };
  //   }
  //   return super.extractPolymorphicRelationship(...arguments);
  // }
}
