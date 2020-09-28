import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ContactsContactController extends Controller {
  @tracked newName;
  @tracked newPhoneNumber;

  @action
  goToContacts() {
    this.transitionToRoute('contacts');
  }

  @action
  editContact(contact, e) {
    e.preventDefault();

    contact.name = this.newName;
    contact.phoneNumber = this.newPhoneNumber;
    contact.save();

    this.transitionToRoute('contacts');
  }
}
