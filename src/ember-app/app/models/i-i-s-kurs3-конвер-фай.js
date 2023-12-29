import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КонверФайMixin
} from '../mixins/regenerated/models/i-i-s-kurs3-конвер-фай';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КонверФайMixin, Validations, {
});

defineProjections(Model);

export default Model;
