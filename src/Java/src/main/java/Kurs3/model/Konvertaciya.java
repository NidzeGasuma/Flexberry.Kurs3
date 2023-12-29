package Kurs3.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kurs3.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Конвертация
 */
@Entity(name = "IISKurs3Конвертация")
@Table(schema = "public", name = "Конвертация")
public class Konvertaciya {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ИмяДок")
    private String имядок;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "ZagrFajla")
    @Convert("ZagrFajla")
    @Column(name = "ЗагрФайла", length = 16, unique = true, nullable = false)
    private UUID _zagrfajlaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "ZagrFajla", insertable = false, updatable = false)
    private ZagrFajla zagrfajla;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "NastrKonv")
    @Convert("NastrKonv")
    @Column(name = "НастрКонв", length = 16, unique = true, nullable = false)
    private UUID _nastrkonvid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "NastrKonv", insertable = false, updatable = false)
    private NastrKonv nastrkonv;


    public Konvertaciya() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getИмяДок() {
      return имядок;
    }

    public void setИмяДок(String имядок) {
      this.имядок = имядок;
    }


}