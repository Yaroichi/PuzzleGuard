package com.puzzleguard.backend.entity;
import jakarta.persistence.*;

@Entity
@Table(name = "PIN")

public class PIN{
    @id
    @generatedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private Long userId;
    private int pin;
}