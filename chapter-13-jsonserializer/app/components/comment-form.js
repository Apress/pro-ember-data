import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CommentFormComponent extends Component {
  @tracked comment;

  @action
  handleSubmit(event) {
    event.preventDefault();
    this.args.onSubmit(this.comment);
    this.comment = '';
  }
}
