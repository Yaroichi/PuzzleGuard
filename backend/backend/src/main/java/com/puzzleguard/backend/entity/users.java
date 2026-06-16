package com.puzzleguard.backend.entity;
import jakarta.persistence.*;

@Entity
@Table(name = "users")

public class Users{
    @id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String forename;
    private String email;
    private Sting password;
    private String
}