import ApplicationSerializer from './application';

export default class ContactSerializer extends ApplicationSerializer {
  normalize(modelClass, resourceHash) {
    resourceHash.links = {
      pets: `/api/contacts/${resourceHash.id}/pets`,
      company: `/api/contacts/${resourceHash.id}/company`
    };

    return super.normalize(...arguments);
  }
}
