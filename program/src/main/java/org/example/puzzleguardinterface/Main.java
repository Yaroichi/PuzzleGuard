package org.example.puzzleguardinterface;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.stage.Stage;
import javafx.scene.layout.StackPane;
import javafx.scene.media.Media;
import javafx.scene.media.MediaPlayer;
import javafx.scene.media.MediaView;
import javafx.animation.PauseTransition;
import javafx.util.Duration;

import java.io.IOException;

public class Main extends Application {
    @Override
    public void start(Stage primaryStage) throws IOException {
        SceneLoader.setStage(primaryStage);
        SceneLoader.setLoading();

    }

    public static void main(String[] args) {
        launch(args);
    }
}