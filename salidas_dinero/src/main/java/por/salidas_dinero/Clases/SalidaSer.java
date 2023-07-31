package por.salidas_dinero.Clases;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
@Service
public class SalidaSer {
    @Autowired
    private SalidaRepo salidaRepo;

    public void saveSalida(SalidaEnt salida) {
        salidaRepo.save(salida);
    }
    public ArrayList<SalidaEnt> getSalidas() {
        return (ArrayList<SalidaEnt>) salidaRepo.findAll();
    }
}
