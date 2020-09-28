import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Serializer | application', function(hooks) {
  setupTest(hooks);

  test('snake_cased JSON attribute keys map to camelCased model attributes', function(assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('application');

    assert.equal(serializer.keyForAttribute('firstName'), 'first_name');
  });

  test('the root key for all outgoing requests is plural', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('application');
    let type = serializer.payloadKeyFromModelName('contact');
    assert.equal(type, 'contacts');
  });
});
