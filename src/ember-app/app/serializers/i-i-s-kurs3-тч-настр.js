import { Serializer as ТчНастрSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kurs3-тч-настр';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТчНастрSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
