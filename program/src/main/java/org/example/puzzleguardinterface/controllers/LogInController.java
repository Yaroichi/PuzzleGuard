package org.example.puzzleguardinterface.controllers;

import javafx.beans.property.SimpleStringProperty;
import javafx.beans.property.StringProperty;
import javafx.fxml.FXML;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;
import javafx.scene.image.ImageView;
import org.example.puzzleguardinterface.SceneLoader;
import javafx.scene.Node;
import org.w3c.dom.Text;
import javafx.scene.control.CheckBox;

import java.awt.event.MouseEvent;


public class LogInController {

    public CheckBox checkBox;
    @FXML
    private ImageView eyeOn;
    @FXML
    private ImageView eyeOff;
    @FXML
    private TextField textField;
    @FXML
    private PasswordField passwordField;


    public void initialize(){
        StringProperty passwordValue = new SimpleStringProperty();

        passwordField.textProperty().bindBidirectional(passwordValue);
        textField.textProperty().bindBidirectional(passwordValue);

        passwordField.setVisible(true);
        textField.setVisible(false);


        eyeOff.setVisible(true);
        eyeOff.toFront();

        eyeOn.setVisible(false);
        eyeOn.toFront();
    }

    @FXML
    public void showPassword(){
        eyeOn.setVisible(true);
        eyeOff.setVisible(false);

        passwordField.setVisible(false);
        textField.setVisible(true);


    }
    @FXML
    public void hidePassword(){
        eyeOn.setVisible(false);
        eyeOff.setVisible(true);

        passwordField.setVisible(true);
        textField.setVisible(false);

        passwordField.setManaged(true);
        textField.setManaged(false);

    }



    @FXML
    private void openSignUp(){
        SceneLoader.setSignUp();
    }

}
