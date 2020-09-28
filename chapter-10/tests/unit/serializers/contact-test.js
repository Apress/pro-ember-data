import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { Response } from 'miragejs';
import sinon from 'sinon';

module('Unit | Serializer | contact', function (hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  test('normalizing findAll()', async function (assert) {
    this.server.get('/api/contacts', function () {
      return new Response(
        200,
        {},
        {
          data: [
            { id: 1, name: 'Fiona' },
            { id: 2, name: 'Steve' }
          ]
        }
      );
    });

    let store = this.owner.lookup('service:store');
    let contacts = await store.findAll('contact');
    assert.equal(contacts.length, 2);
  });

  test('serialization', async function (assert) {
    this.server.post('/api/contacts', function (schema, request) {
      let requestPayload = JSON.parse(request.requestBody);

      assert.deepEqual(requestPayload, {
        data: { firstName: 'Zoey' }
      });

      return new Response(
        201,
        {},
        {
          data: {
            id: '1',
            firstName: 'Zoey'
          }
        }
      );
    });

    let store = this.owner.lookup('service:store');

    let contact = store.createRecord('contact', {
      firstName: 'Zoey'
    });

    await contact.save();

    assert.equal(contact.id, '1');
  });

  test('serialization (with sinon)', async function (assert) {
    let routeHandler = sinon.stub().returns(
      new Response(
        201,
        {},
        {
          data: {
            id: '1',
            firstName: 'Zoey'
          }
        }
      )
    );

    this.server.post('/api/contacts', routeHandler);

    let store = this.owner.lookup('service:store');

    let contact = store.createRecord('contact', {
      firstName: 'Zoey'
    });

    await contact.save();

    assert.equal(contact.id, '1');

    let request = routeHandler.getCall(0).args[1];
    let requestPayload = JSON.parse(request.requestBody);
    assert.deepEqual(requestPayload, {
      data: { firstName: 'Zoey' }
    });
  });
});
