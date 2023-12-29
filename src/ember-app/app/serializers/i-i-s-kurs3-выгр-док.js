import { Serializer as ВыгрДокSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kurs3-выгр-док';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ВыгрДокSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
