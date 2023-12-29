import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as НастрКонвMixin
} from '../mixins/regenerated/models/i-i-s-kurs3-настр-конв';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(НастрКонвMixin, Validations, {
});

defineProjections(Model);

export default Model;
