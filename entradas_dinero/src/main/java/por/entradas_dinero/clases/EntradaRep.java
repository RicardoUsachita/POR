package por.entradas_dinero.clases;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EntradaRep extends JpaRepository<EntradaEnt, Long> {
}
