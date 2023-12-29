import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  атрибут: DS.attr('string'),
  обязательное: DS.attr('boolean'),
  ограничение: DS.attr('number'),
  типАтр: DS.attr('i-i-s-kurs3-тип-атр'),
  загрФайла: DS.belongsTo('i-i-s-kurs3-загр-файла', { inverse: 'тчЗагр', async: false })
});

export let ValidationRules = {
  атрибут: {
    descriptionKey: 'models.i-i-s-kurs3-тч-загр.validations.атрибут.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  обязательное: {
    descriptionKey: 'models.i-i-s-kurs3-тч-загр.validations.обязательное.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ограничение: {
    descriptionKey: 'models.i-i-s-kurs3-тч-загр.validations.ограничение.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  типАтр: {
    descriptionKey: 'models.i-i-s-kurs3-тч-загр.validations.типАтр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  загрФайла: {
    descriptionKey: 'models.i-i-s-kurs3-тч-загр.validations.загрФайла.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТчЗагрE', 'i-i-s-kurs3-тч-загр', {
    атрибут: attr('Атрибут', { index: 0 }),
    типАтр: attr('Тип атрибута', { index: 1 }),
    ограничение: attr('Ограничение', { index: 2 }),
    обязательное: attr('Обязательное', { index: 3 })
  });
};
