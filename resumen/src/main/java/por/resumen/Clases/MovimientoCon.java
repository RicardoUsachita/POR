package por.resumen.Clases;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("/movimientos")
public class MovimientoCon {
    @Autowired
    private MovimientoSer movimientoSer;

    @GetMapping
    public ResponseEntity<ArrayList<MovimientoEnt>> getMovimientos() {
        ArrayList<MovimientoEnt> movimientos = movimientoSer.crearTablaMov();
        if (movimientos.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(movimientos);
    }


}
