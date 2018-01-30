import { moduleForModel, test } from 'ember-qunit';

moduleForModel('last-positions', 'Unit | Serializer | last positions', {
  // Specify the other units that are required for this test.
  needs: ['serializer:last-positions']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
