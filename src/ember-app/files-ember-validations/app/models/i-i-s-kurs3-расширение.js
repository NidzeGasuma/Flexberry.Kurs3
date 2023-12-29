import {
  defineNamespace,
  defineProjections,
  Model as РасширениеMixin
} from '../mixins/regenerated/models/i-i-s-kurs3-расширение';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РасширениеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
