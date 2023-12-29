import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КонвертацияMixin
} from '../mixins/regenerated/models/i-i-s-kurs3-конвертация';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КонвертацияMixin, Validations, {
});

defineProjections(Model);

export default Model;
