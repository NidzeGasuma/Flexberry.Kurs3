import { Serializer as КонверФайSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kurs3-конвер-фай';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КонверФайSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
