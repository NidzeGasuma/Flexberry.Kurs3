import { Serializer as КонвертацияSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kurs3-конвертация';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КонвертацияSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
