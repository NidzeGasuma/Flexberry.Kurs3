package Kurs3.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kurs3.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: ЗагрФайла
 */
@Entity(name = "IISKurs3ЗагрФайла")
@Table(schema = "public", name = "ЗагрФайла")
public class ZagrFajla {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Путь")
    private String путь;

    @Column(name = "Дата")
    private Date дата;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "EksFajly")
    @Convert("EksFajly")
    @Column(name = "ЭксФайлы", length = 16, unique = true, nullable = false)
    private UUID _eksfajlyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "EksFajly", insertable = false, updatable = false)
    private EksFajly eksfajly;

    @OneToMany(mappedBy = "zagrfajla", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TchZagr> tchzagrs;


    public ZagrFajla() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getПуть() {
      return путь;
    }

    public void setПуть(String путь) {
      this.путь = путь;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }


}