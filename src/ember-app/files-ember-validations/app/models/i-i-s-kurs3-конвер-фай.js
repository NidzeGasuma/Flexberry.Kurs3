import {
  defineNamespace,
  defineProjections,
  Model as КонверФайMixin
} from '../mixins/regenerated/models/i-i-s-kurs3-конвер-фай';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КонверФайMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
