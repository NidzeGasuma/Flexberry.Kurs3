import {
  defineNamespace,
  defineProjections,
  Model as ТчЗагрMixin
} from '../mixins/regenerated/models/i-i-s-kurs3-тч-загр';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТчЗагрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
