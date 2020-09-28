import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ContactsController extends Controller {
  @action
  deleteContact(contact) {
    let confirmed = window.confirm(`Are you sure you want to delete ${contact.name}?`);

    if (confirmed) {
      contact.destroyRecord();
      this.transitionToRoute('contacts');
    }
  }
}
