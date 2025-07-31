package org.example.puzzleguardinterface.controllers;

import javafx.fxml.FXML;
import org.example.puzzleguardinterface.SceneLoader;
import javafx.scene.Node;
import org.w3c.dom.Text;
import javafx.scene.control.CheckBox;



public class LogInController {

    public CheckBox checkBox;
    @FXML
    private

    @FXML
    public void initialize(){
        Node text = checkBox.lookup(".text");
        if(text != null){
            text.setOnMouseClicked(mouseEvent -> {
                mouseEvent.consume();
            });
        }
    }

    @FXML
    private void changeField(){

    }
    @FXML
    private void openSignUp(){
        SceneLoader.setSignUp();
    }

}
