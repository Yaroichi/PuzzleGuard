package com.puzzleguard.backend.entity;
import jakarta.persistence.*;

@Entity
@Table(name = "SelectedApps")

public class SelectedApps{
    @id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String appName;

}