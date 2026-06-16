package com.puzzleguard.backend.entity;
import jakarta.persistence.*;

@Entity
@Table(name = "ResetTokens")

public class ResetToken{
    @id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private Long userID;
    private Sting expiryDate;
    private boolean used;

}