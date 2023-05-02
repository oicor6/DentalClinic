package com.example.ClinicaOdontologica.entidades;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter
@Entity
public class Turno {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;
    private LocalDate fechaTurno;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "paciente_id")
    private Paciente paciente;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "odontologo_id")
    private Odontologo odontologo;

}
