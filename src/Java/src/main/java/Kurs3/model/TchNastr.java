package Kurs3.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kurs3.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТчНастр
 */
@Entity(name = "IISKurs3ТчНастр")
@Table(schema = "public", name = "ТчНастр")
public class TchNastr {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Атрибут")
    private String атрибут;

    @Column(name = "ТипАтр")
    private String типатр;

    @Column(name = "Ограничение")
    private Integer ограничение;

    @Column(name = "Обязательное")
    private Boolean обязательное;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "NastrKonv")
    @Convert("NastrKonv")
    @Column(name = "НастрКонв", length = 16, unique = true, nullable = false)
    private UUID _nastrkonvid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "NastrKonv", insertable = false, updatable = false)
    private NastrKonv nastrkonv;


    public TchNastr() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getАтрибут() {
      return атрибут;
    }

    public void setАтрибут(String атрибут) {
      this.атрибут = атрибут;
    }

    public String getТипАтр() {
      return типатр;
    }

    public void setТипАтр(String типатр) {
      this.типатр = типатр;
    }

    public Integer getОграничение() {
      return ограничение;
    }

    public void setОграничение(Integer ограничение) {
      this.ограничение = ограничение;
    }

    public Boolean getОбязательное() {
      return обязательное;
    }

    public void setОбязательное(Boolean обязательное) {
      this.обязательное = обязательное;
    }


}