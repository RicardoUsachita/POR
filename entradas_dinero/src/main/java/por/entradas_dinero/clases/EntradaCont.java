package por.entradas_dinero.clases;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/entradas")
public class EntradaCont {
    @Autowired
    private EntradaSer entradaSer;

    @PostMapping
    public ResponseEntity<Boolean> agregarEntrada(@RequestBody EntradaEnt entrada) {
        entradaSer.agregarEntrada(entrada);
        return ResponseEntity.ok(true);
    }

    @GetMapping
    public ResponseEntity<List<EntradaEnt>> getEntradas() {
        List<EntradaEnt> entradas = entradaSer.getEntradas();
        if (entradas.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(entradas);
    }
}
