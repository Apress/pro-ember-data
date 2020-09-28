import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ContactsNewController extends Controller {
  @tracked name;
  @tracked phoneNumber;

  @action
  goToContacts() {
    this.transitionToRoute('contacts');
  }

  @action
  createContact(e) {
    e.preventDefault();

    let contact = this.store.createRecord('contact', {
      name: this.name,
      phoneNumber: this.phoneNumber
    });

    contact.save();

    this.transitionToRoute('contacts');
  }
}
