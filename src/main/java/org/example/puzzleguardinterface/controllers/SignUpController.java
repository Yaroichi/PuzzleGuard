package org.example.puzzleguardinterface.controllers;

import javafx.fxml.FXML;
import org.example.puzzleguardinterface.SceneLoader;

public class SignUpController {
    @FXML
    private void returnToLogin(){
        SceneLoader.setLogIn();
    }
}
