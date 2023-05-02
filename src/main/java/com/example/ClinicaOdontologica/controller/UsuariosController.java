package com.example.ClinicaOdontologica.controller;

import com.example.ClinicaOdontologica.entidades.Usuario;
import com.example.ClinicaOdontologica.exception.ExistenteException;
import com.example.ClinicaOdontologica.exception.NotFoundException;
import com.example.ClinicaOdontologica.exception.BadRequestException;
import com.example.ClinicaOdontologica.servicios.UsuarioService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@AllArgsConstructor
public class UsuariosController {
    private UsuarioService usuarioService;

    @PostMapping("/registrar")
    public ResponseEntity<String> agregar(@RequestBody Usuario usuario) throws ExistenteException, NotFoundException, BadRequestException {
        usuarioService.guardar(usuario);
        return new ResponseEntity<>("Usuario agregado correctamente",null, HttpStatus.CREATED);
    }

}
