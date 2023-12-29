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
  настрКонв: DS.belongsTo('i-i-s-kurs3-настр-конв', { inverse: 'тчНастр', async: false })
});

export let ValidationRules = {
  атрибут: {
    descriptionKey: 'models.i-i-s-kurs3-тч-настр.validations.атрибут.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  обязательное: {
    descriptionKey: 'models.i-i-s-kurs3-тч-настр.validations.обязательное.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ограничение: {
    descriptionKey: 'models.i-i-s-kurs3-тч-настр.validations.ограничение.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  типАтр: {
    descriptionKey: 'models.i-i-s-kurs3-тч-настр.validations.типАтр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  настрКонв: {
    descriptionKey: 'models.i-i-s-kurs3-тч-настр.validations.настрКонв.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТчНастрE', 'i-i-s-kurs3-тч-настр', {
    атрибут: attr('Атрибут', { index: 0 }),
    типАтр: attr('Тип атрибута', { index: 1 }),
    ограничение: attr('Ограничение', { index: 2 }),
    обязательное: attr('Обязательное', { index: 3 })
  });
};
