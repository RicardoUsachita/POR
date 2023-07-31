package por.resumen.Clases;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import por.resumen.Clases.Modelos.Entrada;
import por.resumen.Clases.Modelos.Salida;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Comparator;

@Service
public class MovimientoSer {
    @Autowired
    MovimientoRepo movimientoRep;

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    RestTemplate restTemplate;

    Integer saldo = 0;
    public ArrayList<MovimientoEnt> crearTablaMov(){

        ArrayList<MovimientoEnt> movimientos = new ArrayList<>();
        ArrayList<Entrada> entradas = getEntradas();
        ArrayList<Salida> salidas = getSalidas();

        agregarEntradas(entradas, movimientos);
        agregarSalidas(salidas, movimientos);

        movimientos = ordenarPorFecha(movimientos);

        for (MovimientoEnt movimiento : movimientos) {
            saldo += movimiento.getIngreso() - movimiento.getEgreso();
            movimiento.setSaldo(saldo);
            movimientoRep.save(movimiento);
        }
        return movimientos;
    }

    private ArrayList<Entrada> getEntradas() {
        String url = "http://localhost:8080/entradas";
        ArrayList<Entrada> entradas = new ArrayList<>();
        try {
            entradas = objectMapper.readValue(restTemplate.getForObject(url, String.class), ArrayList.class);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return entradas;
    }

    private ArrayList<Salida> getSalidas() {
        String url = "http://localhost:8080/salidas";
        ArrayList<Salida> salidas = new ArrayList<>();
        try {
            salidas = objectMapper.readValue(restTemplate.getForObject(url, String.class), ArrayList.class);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return salidas;
    }
    private void agregarEntradas(ArrayList<Entrada> entradas, ArrayList<MovimientoEnt> movimientos){
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

    private void agregarSalidas(ArrayList<Salida> salidas, ArrayList<MovimientoEnt> movimientos){
        for (Salida salida : salidas) {
            MovimientoEnt movimiento = new MovimientoEnt();
            movimiento.setTipo_documento(salida.getTipo_documento());
            movimiento.setNumero_documento(salida.getNumero_documento());
            movimiento.setMotivo(salida.getMotivo());
            movimiento.setIngreso(0);
            movimiento.setEgreso(salida.getMonto());
            movimientos.add(movimiento);
        }
    }

    private ArrayList<MovimientoEnt> ordenarPorFecha(ArrayList<MovimientoEnt> movimientos) {
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
