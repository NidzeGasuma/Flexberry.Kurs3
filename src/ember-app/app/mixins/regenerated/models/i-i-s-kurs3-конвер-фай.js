import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  путьФайла: DS.attr('string'),
  выгрДок: DS.belongsTo('i-i-s-kurs3-выгр-док', { inverse: null, async: false })
});

export let ValidationRules = {
  путьФайла: {
    descriptionKey: 'models.i-i-s-kurs3-конвер-фай.validations.путьФайла.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  выгрДок: {
    descriptionKey: 'models.i-i-s-kurs3-конвер-фай.validations.выгрДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КонверФайE', 'i-i-s-kurs3-конвер-фай', {
    выгрДок: belongsTo('i-i-s-kurs3-выгр-док', 'Выгрузка документа', {
      конвертация: belongsTo('i-i-s-kurs3-конвертация', '', {
        загрФайла: belongsTo('i-i-s-kurs3-загр-файла', '', {
          эксФайлы: belongsTo('i-i-s-kurs3-экс-файлы', '', {
            имя: attr('Старое имя', { index: 1 })
          }, { index: -1, hidden: true })
        }, { index: -1, hidden: true }),
        имяДок: attr('Имя документа', { index: 2 })
      }, { index: -1, hidden: true }),
      newName: attr('Новое имя файла', { index: 3, hidden: true })
    }, { index: 0, displayMemberPath: 'newName' }),
    путьФайла: attr('Путь до файла', { index: 4 })
  });

  modelClass.defineProjection('КонверФайL', 'i-i-s-kurs3-конвер-фай', {
    выгрДок: belongsTo('i-i-s-kurs3-выгр-док', 'Новое имя файла', {
      newName: attr('Новое имя файла', { index: 0 }),
      конвертация: belongsTo('i-i-s-kurs3-конвертация', '', {
        имяДок: attr('Имя документа', { index: 1 }),
        загрФайла: belongsTo('i-i-s-kurs3-загр-файла', '', {
          эксФайлы: belongsTo('i-i-s-kurs3-экс-файлы', '', {
            имя: attr('Старое имя', { index: 2 })
          }, { index: -1, hidden: true })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true }),
    путьФайла: attr('Путь до файла', { index: 3 })
  });
};
