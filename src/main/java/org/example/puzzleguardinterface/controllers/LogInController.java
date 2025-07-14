package org.example.puzzleguardinterface.controllers;

import javafx.fxml.FXML;
import org.example.puzzleguardinterface.SceneLoader;
import org.w3c.dom.Text;

import java.awt.*;

public class LogInController {

    @FXML
    private void openSignUp(){
        SceneLoader.setSignUp();
    }

}
