package por.entradas_dinero.clases;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class EntradaSer {
    @Autowired
    private EntradaRep entradaRep;

    public void agregarEntrada(EntradaEnt entrada) {
        entradaRep.save(entrada);
    }
    public ArrayList<EntradaEnt> getEntradas() {
        return (ArrayList<EntradaEnt>) entradaRep.findAll();
    }
}
