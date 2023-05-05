package com.example.ClinicaOdontologica.servicios;

import com.example.ClinicaOdontologica.entidades.Users;
import com.example.ClinicaOdontologica.repository.UsersRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
@AllArgsConstructor
public class UsersService {
    private UsersRepository usuarioRepository;

    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public void saveUser(Users users){
       usuarioRepository.save(users);
}
}
