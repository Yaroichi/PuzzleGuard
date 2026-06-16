package com.puzzleguard.backend.entity;
import jakarta.persistence.*;

@Entity
@Table(name = "Riddles")

public class Riddles{
    @id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private Long userId;
    private String riddleName;
    private String riddleQuestion;
    private String riddleAnswer;
    private boolean solved;
}