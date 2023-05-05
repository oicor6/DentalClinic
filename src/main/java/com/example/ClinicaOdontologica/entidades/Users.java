package com.example.ClinicaOdontologica.entidades;


import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;
    private String name;
    private String email;
    private String password;
    @Enumerated(EnumType.STRING)
    private Rol rol;

    public Users(String name, String email, String password, Rol rol) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.rol = rol;
    }
    public Users(){};

}
