import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имяДок: DS.attr('string'),
  загрФайла: DS.belongsTo('i-i-s-kurs3-загр-файла', { inverse: null, async: false }),
  настрКонв: DS.belongsTo('i-i-s-kurs3-настр-конв', { inverse: null, async: false })
});

export let ValidationRules = {
  имяДок: {
    descriptionKey: 'models.i-i-s-kurs3-конвертация.validations.имяДок.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  загрФайла: {
    descriptionKey: 'models.i-i-s-kurs3-конвертация.validations.загрФайла.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  настрКонв: {
    descriptionKey: 'models.i-i-s-kurs3-конвертация.validations.настрКонв.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КонвертацияE', 'i-i-s-kurs3-конвертация', {
    загрФайла: belongsTo('i-i-s-kurs3-загр-файла', 'Загрузка файла', {
      дата: attr('Дата', { index: 1, hidden: true }),
      эксФайлы: belongsTo('i-i-s-kurs3-экс-файлы', '', {
        имя: attr('Имя файла', { index: 2 })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'дата' }),
    имяДок: attr('Имя документа', { index: 3 }),
    настрКонв: belongsTo('i-i-s-kurs3-настр-конв', 'Настройка', {
      наименование: attr('Наименование', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('КонвертацияL', 'i-i-s-kurs3-конвертация', {
    имяДок: attr('Имя док', { index: 0 }),
    загрФайла: belongsTo('i-i-s-kurs3-загр-файла', 'Путь', {
      путь: attr('Путь', { index: 1 })
    }, { index: -1, hidden: true }),
    настрКонв: belongsTo('i-i-s-kurs3-настр-конв', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
