package org.example.puzzleguardinterface.controllers;

import javafx.fxml.FXML;
import javafx.scene.control.TextField;
import javafx.scene.image.Image;
import javafx.scene.layout.*;
import org.example.puzzleguardinterface.SceneLoader;

import java.awt.*;

public class ProfileController {
    @FXML
    private BorderPane root;

    @FXML public void initialize(){
        BackgroundImage bg = new BackgroundImage(new Image(AppSelectionController.class.getResource("/assets/img/background2.jpg").toExternalForm()), BackgroundRepeat.NO_REPEAT,BackgroundRepeat.NO_REPEAT, BackgroundPosition.CENTER,new BackgroundSize(100,100,true,true,true,true));
        root.setBackground(new Background(bg));

    }

    @FXML
    private javafx.scene.control.Button confirmButton1;
    @FXML
    private javafx.scene.control.Button confirmButton2;
    @FXML
    private javafx.scene.control.Button  confirmButton3;
    @FXML
    private javafx.scene.control.Button confirmButton4;
    @FXML
    private TextField textField3;

    @FXML
    private void buttonReveal()
    {
        confirmButton1.setVisible(true);

    }
    @FXML
    private void buttonReveal2()
    {
        confirmButton2.setVisible(true);

    }
    @FXML
    private void buttonReveal3()
    {
        confirmButton3.setVisible(true);


    }
    @FXML
    private void buttonReveal4()
    {
        confirmButton4.setVisible(true);

    }

    @FXML
    private void resetEmail()
    {
        SceneLoader.load("PersonalInfoReset.fxml");
    }

    @FXML
    private void resetPassword(){
        SceneLoader.load("DigitInput.fxml");
    }



}
