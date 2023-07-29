package por.entradas_dinero.clases;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController("/entrada")
public class EntradaCont {
    @Autowired
    private EntradaSer entradaSer;

    public ResponseEntity<Boolean> agregarEntrada(EntradaEnt entrada) {
        entradaSer.agregarEntrada(entrada);
        return ResponseEntity.ok(true);
    }
    public ResponseEntity<ArrayList<EntradaEnt>> getEntradas() {
        return ResponseEntity.ok(entradaSer.getEntradas());
    }
}
