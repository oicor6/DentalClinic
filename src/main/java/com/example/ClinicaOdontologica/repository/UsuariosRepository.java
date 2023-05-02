package com.example.ClinicaOdontologica.repository;

import com.example.ClinicaOdontologica.entidades.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuariosRepository extends JpaRepository<Usuario, Integer> {
Usuario findByEmail(String email);
}

