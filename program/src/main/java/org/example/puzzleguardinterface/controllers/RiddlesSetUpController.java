package org.example.puzzleguardinterface.controllers;

import javafx.fxml.FXML;
import javafx.scene.control.ComboBox;
import javafx.scene.image.Image;
import javafx.scene.layout.*;
import org.example.puzzleguardinterface.SceneLoader;

public class RiddlesSetUpController {
    @FXML
    private BorderPane root;
    @FXML
    private ComboBox<String> levelCombobox;
    @FXML
    private ComboBox<String> typeCombobox;


    @FXML public void initialize(){
        BackgroundImage bg = new BackgroundImage(new Image(AppSelectionController.class.getResource("/assets/img/background2.jpg").toExternalForm()), BackgroundRepeat.NO_REPEAT,BackgroundRepeat.NO_REPEAT, BackgroundPosition.CENTER,new BackgroundSize(100,100,true,true,true,true));
        root.setBackground(new Background(bg));

        levelCombobox.getItems().addAll("Easy","Need to think","Hard","Impossibly hard");
        typeCombobox.getItems().addAll("Multiple choice","60s quiz","True or False","Matching game","Give your own answer","Comparison");

    }

    @FXML
    private void openMethodSelection()
    {
        SceneLoader.load("MethodSelection.fxml");
    }
    @FXML
    private void openProfile()
    {
        SceneLoader.load("Profile.fxml");
    }

    @FXML
    private void openSubscriptions()
    {
        SceneLoader.load("Subscription.fxml");
    }





}
