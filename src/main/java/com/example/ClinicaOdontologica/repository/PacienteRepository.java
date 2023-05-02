package com.example.ClinicaOdontologica.repository;

import com.example.ClinicaOdontologica.entidades.Odontologo;
import com.example.ClinicaOdontologica.entidades.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface PacienteRepository extends JpaRepository<Paciente, Integer> {

    @Modifying
    @Query(value = "update paciente p set p.domicilio= ?1 where id = ?2", nativeQuery = true)
    void actualizar(@Param("domicilio") String domicilio, @Param("id") Integer id);

}
