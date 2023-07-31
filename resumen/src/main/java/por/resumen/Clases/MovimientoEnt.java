package por.resumen.Clases;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "movimiento")
public class MovimientoEnt {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fecha;
    private String tipo_documento;
    private Integer numero_documento;
    private String motivo;
    private Integer ingreso;
    private Integer egreso;
    private Integer saldo;
}
