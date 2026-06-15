package org.example.puzzleguardinterface;

import javafx.animation.PauseTransition;
import javafx.application.Application;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.layout.AnchorPane;
import javafx.scene.text.Font;
import javafx.stage.Stage;
import javafx.scene.layout.StackPane;
import javafx.scene.media.Media;
import javafx.scene.media.MediaPlayer;
import javafx.scene.media.MediaView;
import javafx.util.Duration;
import org.example.puzzleguardinterface.controllers.ChoicePageController;

import java.io.IOException;

import javax.imageio.IIOException;

public class SceneLoader {
    private static Stage stage;

    public static void setStage(Stage pStage)
    {
        stage = pStage;
    }
    public static void load(String fxml) {
        try {
            Parent root = FXMLLoader.load(SceneLoader.class.getResource(fxml));
            stage.getScene().setRoot(root);
            if(fxml.equals("Login.fxml") || fxml.equals("SignUp.fxml")){
                stage.setWidth(659);
                stage.setHeight(480);
                stage.centerOnScreen();
                stage.setResizable(false);
            }
            else{
                stage.setFullScreen(true);
                stage.setFullScreenExitHint("");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


}

