package por.resumen.Clases.Modelos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Salida {
    private String fecha;
    private String tipo_documento;
    private Integer numero_documento;
    private String motivo;
    private Integer monto;
}
