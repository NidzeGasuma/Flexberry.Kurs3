import {
  defineNamespace,
  defineProjections,
  Model as ЗагрФайлаMixin
} from '../mixins/regenerated/models/i-i-s-kurs3-загр-файла';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗагрФайлаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
