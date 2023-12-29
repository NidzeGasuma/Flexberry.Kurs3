import {
  defineNamespace,
  defineProjections,
  Model as ТчНастрMixin
} from '../mixins/regenerated/models/i-i-s-kurs3-тч-настр';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТчНастрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
