package org.example.puzzleguardinterface.controllers;

import javafx.fxml.FXML;
import javafx.scene.image.Image;
import javafx.scene.layout.*;
import org.example.puzzleguardinterface.SceneLoader;

public class AppSelectionController {
    @FXML
    private BorderPane root;

    public void initialize(){
        BackgroundImage bg = new BackgroundImage(new Image(AppSelectionController.class.getResource("/assets/img/background2.jpg").toExternalForm()), BackgroundRepeat.NO_REPEAT,BackgroundRepeat.NO_REPEAT, BackgroundPosition.CENTER,new BackgroundSize(100,100,true,true,true,true));
        root.setBackground(new Background(bg));

    }
    @FXML
    private void openChoicePage(){
        SceneLoader.load("ChoicePage.fxml");
    }

    @FXML
    private void openProfile()
    {
        SceneLoader.load("Profile.fxml");
    }

    @FXML
    private void openSubscriptions()
    {
        SceneLoader.load("Subcription.fxml");
    }

}
