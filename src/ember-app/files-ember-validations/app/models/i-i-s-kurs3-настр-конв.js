import {
  defineNamespace,
  defineProjections,
  Model as НастрКонвMixin
} from '../mixins/regenerated/models/i-i-s-kurs3-настр-конв';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(НастрКонвMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
