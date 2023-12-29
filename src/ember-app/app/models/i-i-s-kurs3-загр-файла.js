import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЗагрФайлаMixin
} from '../mixins/regenerated/models/i-i-s-kurs3-загр-файла';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЗагрФайлаMixin, Validations, {
});

defineProjections(Model);

export default Model;
