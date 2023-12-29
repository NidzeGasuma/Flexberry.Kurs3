import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  newName: DS.attr('string'),
  репозиторий: DS.attr('string'),
  конвертация: DS.belongsTo('i-i-s-kurs3-конвертация', { inverse: null, async: false })
});

export let ValidationRules = {
  newName: {
    descriptionKey: 'models.i-i-s-kurs3-выгр-док.validations.newName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  репозиторий: {
    descriptionKey: 'models.i-i-s-kurs3-выгр-док.validations.репозиторий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  конвертация: {
    descriptionKey: 'models.i-i-s-kurs3-выгр-док.validations.конвертация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВыгрДокE', 'i-i-s-kurs3-выгр-док', {
    newName: attr('Новое имя файла', { index: 0 }),
    репозиторий: attr('Репозиторий', { index: 1 }),
    конвертация: belongsTo('i-i-s-kurs3-конвертация', 'Конвертация', {
      имяДок: attr('Имя документа', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'имяДок' })
  });

  modelClass.defineProjection('ВыгрДокL', 'i-i-s-kurs3-выгр-док', {
    newName: attr('Новое имя файла', { index: 0 }),
    репозиторий: attr('Репозиторий', { index: 1 }),
    конвертация: belongsTo('i-i-s-kurs3-конвертация', 'Имя документа', {
      имяДок: attr('Имя документа', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
