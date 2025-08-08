package org.example.puzzleguardinterface.controllers;

import javafx.fxml.FXML;
import javafx.scene.media.MediaView;
import javafx.scene.media.Media;
import javafx.scene.media.MediaPlayer;
import javafx.animation.PauseTransition;
import javafx.util.Duration;
import org.example.puzzleguardinterface.SceneLoader;


public class LoadingController {
    @FXML
    private MediaView mediaView;
    @FXML
    public void initialize(){
        String path = getClass().getResource("/assets/videos/loading1.mp4").toExternalForm();

        Media media = new Media(path);
        MediaPlayer mediaPlayer = new MediaPlayer(media);
        mediaPlayer.setCycleCount(MediaPlayer.INDEFINITE);
        mediaPlayer.setMute(true);

        mediaView.setMediaPlayer(mediaPlayer);
        mediaPlayer.play();
        
    }
}
