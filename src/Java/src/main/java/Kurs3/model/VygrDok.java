package Kurs3.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kurs3.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ВыгрДок
 */
@Entity(name = "IISKurs3ВыгрДок")
@Table(schema = "public", name = "ВыгрДок")
public class VygrDok {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "NewName")
    private String newname;

    @Column(name = "Репозиторий")
    private String репозиторий;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Konvertaciya")
    @Convert("Konvertaciya")
    @Column(name = "Конвертация", length = 16, unique = true, nullable = false)
    private UUID _konvertaciyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Konvertaciya", insertable = false, updatable = false)
    private Konvertaciya konvertaciya;


    public VygrDok() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getNewName() {
      return newname;
    }

    public void setNewName(String newname) {
      this.newname = newname;
    }

    public String getРепозиторий() {
      return репозиторий;
    }

    public void setРепозиторий(String репозиторий) {
      this.репозиторий = репозиторий;
    }


}