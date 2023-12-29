import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЕдиИзмMixin
} from '../mixins/regenerated/models/i-i-s-kurs3-еди-изм';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЕдиИзмMixin, Validations, {
});

defineProjections(Model);

export default Model;
