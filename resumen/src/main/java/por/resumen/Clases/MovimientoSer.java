package por.resumen.Clases;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import por.resumen.Clases.Modelos.Entrada;
import por.resumen.Clases.Modelos.Salida;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@Service
public class MovimientoSer {
    @Autowired
    MovimientoRepo movimientoRep;

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    RestTemplate restTemplate;

    Integer saldo = 0;
    public List<MovimientoEnt> crearTablaMov(){

        List<MovimientoEnt> movimientos = new ArrayList<>();
        List<Entrada> entradas = getEntradas();
        List<Salida> salidas = getSalidas();

        agregarEntradas(entradas, movimientos);
        agregarSalidas(salidas, movimientos);

        System.out.println(movimientos);

        movimientos = ordenarPorFecha(movimientos);

        for (MovimientoEnt movimiento : movimientos) {
            saldo += movimiento.getIngreso() - movimiento.getEgreso();
            movimiento.setSaldo(saldo);
            movimientoRep.save(movimiento);
        }
        return movimientos;
    }

    private List<Entrada> getEntradas() {
        String url = "http://localhost:8080/entradas";
        ResponseEntity<List<Entrada>> response = restTemplate.exchange(
                url,
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<List<Entrada>>() {}
        );
        List<Entrada> entradas = response.getBody();
        System.out.println(entradas);
        return entradas;
    }

    private List<Salida> getSalidas() {
        String url = "http://localhost:8080/salidas";
        ResponseEntity<List<Salida>> response = restTemplate.exchange(
                url,
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<List<Salida>>() {}
        );
        List<Salida> salidas = response.getBody();
        System.out.println(salidas);
        return salidas;
    }
    private void agregarEntradas(List<Entrada> entradas, List<MovimientoEnt> movimientos){
        for (Entrada entrada : entradas) {
            MovimientoEnt movimiento = new MovimientoEnt();
            movimiento.setFecha(entrada.getFecha());
            movimiento.setTipo_documento("Recibo");
            movimiento.setNumero_documento(entrada.getNum_recibo());
            movimiento.setMotivo("Ingreso a Caja");
            movimiento.setIngreso(entrada.getMonto());
            movimiento.setEgreso(0);
            movimientos.add(movimiento);
        }
    }

    private void agregarSalidas(List<Salida> salidas, List<MovimientoEnt> movimientos){
        for (Salida salida : salidas) {
            MovimientoEnt movimiento = new MovimientoEnt();
            movimiento.setFecha(salida.getFecha());
            movimiento.setTipo_documento(salida.getTipo_documento());
            movimiento.setNumero_documento(salida.getNumero_documento());
            movimiento.setMotivo(salida.getMotivo());
            movimiento.setIngreso(0);
            movimiento.setEgreso(salida.getMonto());
            movimientos.add(movimiento);
        }
    }

    private List<MovimientoEnt> ordenarPorFecha(List<MovimientoEnt> movimientos) {
        Comparator<MovimientoEnt> comparador = new Comparator<MovimientoEnt>() {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
            @Override
            public int compare(MovimientoEnt o1, MovimientoEnt o2) {
                LocalDate fecha1 = LocalDate.parse(o1.getFecha(), formatter);
                LocalDate fecha2 = LocalDate.parse(o2.getFecha(), formatter);
                return fecha1.compareTo(fecha2);
            }
        };

        movimientos.sort(comparador);
        return movimientos;
    }
}
