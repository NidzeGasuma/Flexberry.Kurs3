package Kurs3.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kurs3.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: КонверФай
 */
@Entity(name = "IISKurs3КонверФай")
@Table(schema = "public", name = "КонверФай")
public class KonverFaj {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ПутьФайла")
    private String путьфайла;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "VygrDok")
    @Convert("VygrDok")
    @Column(name = "ВыгрДок", length = 16, unique = true, nullable = false)
    private UUID _vygrdokid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "VygrDok", insertable = false, updatable = false)
    private VygrDok vygrdok;


    public KonverFaj() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getПутьФайла() {
      return путьфайла;
    }

    public void setПутьФайла(String путьфайла) {
      this.путьфайла = путьфайла;
    }


}