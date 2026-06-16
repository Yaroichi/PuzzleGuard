package com.puzzleguard.backend.entity;
import jakarta.persistence.*;

@Entity
@Table(name = "EnglishQuestions")

public class EnglishQuestions{
    @id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private Long userId;
    private String riddleName;
    private String riddleQuestion;
    private String riddleAnswer;
    private boolean solved;
}