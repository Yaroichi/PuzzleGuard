package org.example.puzzleguardinterface.controllers;

import javafx.fxml.FXML;
import javafx.scene.image.Image;
import javafx.scene.layout.*;
import org.example.puzzleguardinterface.SceneLoader;

public class ChoicePageController {
    @FXML
     private BorderPane rootPane;

    public void initialize(){
        BackgroundImage bg = new BackgroundImage(new Image(ChoicePageController.class.getResource("/assets/img/background2.jpg").toExternalForm()), BackgroundRepeat.NO_REPEAT,BackgroundRepeat.NO_REPEAT, BackgroundPosition.CENTER,new BackgroundSize(100,100,true,true,true,true));
        rootPane.setBackground(new Background(bg));
    }

    @FXML
    private void openAppSelectionWindow(){
        SceneLoader.setAppSelection();
    }

    @FXML
    private void openMethodSelection(){
        SceneLoader.setMethodSelection();
    }
}
