package por.entradas_dinero.clases;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController("/entradas")
public class EntradaCont {
    @Autowired
    private EntradaSer entradaSer;

    @PostMapping
    public ResponseEntity<Boolean> agregarEntrada(EntradaEnt entrada) {
        entradaSer.agregarEntrada(entrada);
        return ResponseEntity.ok(true);
    }

    @GetMapping
    public ResponseEntity<ArrayList<EntradaEnt>> getEntradas() {
        return ResponseEntity.ok(entradaSer.getEntradas());
    }
}
