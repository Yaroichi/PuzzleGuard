package com.puzzleguard.backend.entity;
import jakarta.persistence.*;

@Entity
@Table(name = "MathQuestion")

public class MathQuestions{
    @id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private Long userId;
    private String questionName;
    private String question;
    private String answer;
    private boolean solved;
}