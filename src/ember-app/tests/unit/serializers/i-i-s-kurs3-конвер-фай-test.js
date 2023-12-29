import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kurs3-конвер-фай', 'Unit | Serializer | i-i-s-kurs3-конвер-фай', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kurs3-конвер-фай',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kurs3-тип-атр',

    'model:i-i-s-kurs3-выгр-док',
    'model:i-i-s-kurs3-еди-изм',
    'model:i-i-s-kurs3-загр-файла',
    'model:i-i-s-kurs3-конвер-фай',
    'model:i-i-s-kurs3-конвертация',
    'model:i-i-s-kurs3-настр-конв',
    'model:i-i-s-kurs3-расширение',
    'model:i-i-s-kurs3-тч-загр',
    'model:i-i-s-kurs3-тч-настр',
    'model:i-i-s-kurs3-экс-файлы',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
