import {
  defineNamespace,
  defineProjections,
  Model as ВыгрДокMixin
} from '../mixins/regenerated/models/i-i-s-kurs3-выгр-док';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ВыгрДокMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
