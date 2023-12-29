package Kurs3.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kurs3.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ЭксФайлы
 */
@Entity(name = "IISKurs3ЭксФайлы")
@Table(schema = "public", name = "ЭксФайлы")
public class EksFajly {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Размер")
    private Integer размер;

    @Column(name = "Репозиторий")
    private String репозиторий;

    @Column(name = "Имя")
    private String имя;

    @Column(name = "Дата")
    private Date дата;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "EdiIzm")
    @Convert("EdiIzm")
    @Column(name = "ЕдиИзм", length = 16, unique = true, nullable = false)
    private UUID _ediizmid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "EdiIzm", insertable = false, updatable = false)
    private EdiIzm ediizm;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Rasshirenie")
    @Convert("Rasshirenie")
    @Column(name = "Расширение", length = 16, unique = true, nullable = false)
    private UUID _rasshirenieid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Rasshirenie", insertable = false, updatable = false)
    private Rasshirenie rasshirenie;


    public EksFajly() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getРазмер() {
      return размер;
    }

    public void setРазмер(Integer размер) {
      this.размер = размер;
    }

    public String getРепозиторий() {
      return репозиторий;
    }

    public void setРепозиторий(String репозиторий) {
      this.репозиторий = репозиторий;
    }

    public String getИмя() {
      return имя;
    }

    public void setИмя(String имя) {
      this.имя = имя;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }


}