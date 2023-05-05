package com.example.ClinicaOdontologica.repository;

import com.example.ClinicaOdontologica.entidades.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository extends JpaRepository<Users, Integer> {
Users findByEmail(String email);
}

