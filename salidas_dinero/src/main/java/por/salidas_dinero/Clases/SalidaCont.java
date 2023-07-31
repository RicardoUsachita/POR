package por.salidas_dinero.Clases;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("/salidas")
public class SalidaCont {
    @Autowired
    private SalidaSer salidaSer;

    @PostMapping
    public ResponseEntity<Boolean> saveSalida(SalidaEnt salida) {
        salidaSer.saveSalida(salida);
        return ResponseEntity.ok(true);
    }

    @GetMapping
    public ResponseEntity<ArrayList<SalidaEnt>> getSalidas() {
        return ResponseEntity.ok(salidaSer.getSalidas());
    }
}
