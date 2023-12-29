import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЭксФайлыMixin
} from '../mixins/regenerated/models/i-i-s-kurs3-экс-файлы';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЭксФайлыMixin, Validations, {
});

defineProjections(Model);

export default Model;
