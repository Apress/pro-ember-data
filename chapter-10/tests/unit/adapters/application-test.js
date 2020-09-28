import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | application', function (hooks) {
  setupTest(hooks);

  test('isInvalid() returns true for a 400 status code', function (assert) {
    let adapter = this.owner.lookup('adapter:application');
    assert.ok(adapter.isInvalid(400));
  });

  test('isInvalid() returns true for a 422 status code', function (assert) {
    let adapter = this.owner.lookup('adapter:application');
    assert.ok(adapter.isInvalid(422));
  });

  test('isInvalid() returns false for a 500 status code', function (assert) {
    let adapter = this.owner.lookup('adapter:application');
    assert.notOk(adapter.isInvalid(500));
  });
});
