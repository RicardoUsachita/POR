package por.resumen.Clases.Modelos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Entrada {
    private String fecha;
    private Integer num_recibo;
    private Integer monto;
}
