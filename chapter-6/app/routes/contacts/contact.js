import Route from '@ember/routing/route';

export default class ContactsContactRoute extends Route {
  model(params) {
    return this.store.findRecord('contact', params.id);
  }

  setupController(controller, model) {
    controller.newName = model.name;
    controller.newPhoneNumber = model.phoneNumber;
    super.setupController(...arguments);
  }
}
