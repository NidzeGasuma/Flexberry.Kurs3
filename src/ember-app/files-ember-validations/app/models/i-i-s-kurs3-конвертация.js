import {
  defineNamespace,
  defineProjections,
  Model as КонвертацияMixin
} from '../mixins/regenerated/models/i-i-s-kurs3-конвертация';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КонвертацияMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
