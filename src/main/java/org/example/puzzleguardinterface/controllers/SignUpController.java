package org.example.puzzleguardinterface.controllers;


import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import org.example.puzzleguardinterface.DatabaseManager;
import org.example.puzzleguardinterface.SceneLoader;
import org.example.puzzleguardinterface.UserDAO;

import java.awt.*;
import java.net.URL;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ResourceBundle;
import javafx.scene.control.TextField;
import javafx.scene.control.PasswordField;
import javafx.scene.text.Text;


public class SignUpController{
    @FXML
    private TextField nameField;
    @FXML
    private TextField surnameField;
    @FXML
    private TextField emailField;
    @FXML
    private PasswordField passwordField;
    @FXML
    private PasswordField passwordField1;
    @FXML
    private Text passwordWarning;

    @FXML
    private void returnToLogin(){
        SceneLoader.setLogIn();
    }
    @FXML
    private void addUser(){
        String mainPassword = passwordField.getText();
        String confirmedPassword = passwordField1.getText();
        String name = nameField.getText();
        String surname = surnameField.getText();
        String email = emailField.getText();
        boolean allFields = !name.isEmpty() && !surname.isEmpty() && !email.isEmpty() && !mainPassword.isEmpty() && !confirmedPassword.isEmpty();

        if(allFields){
            if( email.contains("@") ){
                passwordWarning.setVisible(false);
                if(mainPassword.length() >=8){
                    passwordWarning.setVisible(false);
                    if(mainPassword.equals(confirmedPassword) ){
                        passwordWarning.setVisible(false);
                        UserDAO.insertUser(name,surname,email,mainPassword);

                    }
                    else {
                        passwordWarning.setText("Passwords didn't match!");
                        passwordWarning.setVisible(true);
                    }

                }
                else{
                    passwordWarning.setText("Password should contain at least 8 symbols");
                    passwordWarning.setVisible(true);
                }
            }
            else{
                passwordWarning.setText("Email should contain @ sign");
                passwordWarning.setVisible(true);

            }
        }
        else{
            passwordWarning.setText("Please,fill all of the fields!");
            passwordWarning.setVisible(true);
        }


    }

}
