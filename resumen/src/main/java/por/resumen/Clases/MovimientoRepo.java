package por.resumen.Clases;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
@Repository
public interface MovimientoRepo extends JpaRepository<MovimientoEnt, Long>{
}
