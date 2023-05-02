package com.example.ClinicaOdontologica.servicios;

import com.example.ClinicaOdontologica.entidades.Usuario;
import com.example.ClinicaOdontologica.repository.UsuariosRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@AllArgsConstructor
public class UsuarioService implements UserDetailsService {
    private UsuariosRepository usuarioRepository;

    private BCryptPasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario usuario = usuarioRepository.findByEmail(username);
        if(usuario == null) {
            throw new UsernameNotFoundException("Usuario o password inválidos");
        }
        return new User(usuario.getEmail(),usuario.getPass(), new ArrayList<>(usuario.getAuthorities()));
    }

    public Usuario guardar(Usuario usuario) {
        Usuario usuarios = new Usuario(usuario.getNombre(),usuario.getEmail(), passwordEncoder.encode(usuario.getPass()),usuario.getRol());
        return usuarioRepository.save(usuarios);
    }
}
