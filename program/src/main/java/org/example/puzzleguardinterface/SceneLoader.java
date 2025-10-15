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
    public static void setLoading()
    {
        loadScene("Loading.fxml");
        PauseTransition delay = new PauseTransition(Duration.seconds(2));
        delay.setOnFinished(event -> {
            SceneLoader.setLogIn();
        });
        delay.play();
    }
    public static void setLogIn()
    {
        loadScene("LogIn.fxml");

    }
    public static void setSignUp()
    {
        loadScene("SignUp.fxml");
    }
    public static void setChoicePage()
    {
        loadScene("ChoicePage.fxml");
    }
    public static void setMethodSelection()
    {
        loadScene("MethodSelection.fxml");
    }

    public static void setAppSelection()
    {
        loadScene("AppSelection.fxml");
    }
    public static void setEmailEntry(){
        loadScene("EmailEntryForPasswordReset.fxml");
    }

    public static void setSubscription()
    {
        loadScene("Subscription.fxml");
    }
    public static void setProfile()
    {
        loadScene("Profile.fxml");
    }

    public static void setDigitInput()
    {
        loadScene("DigitInput.fxml");
    }

    public static void setPasswordReset()
    {
        loadScene("PasswordReset.fxml");
    }
    public static void setPersonalInfoReset()
    {
        loadScene("PersonalInfoReset.fxml");
    }
    public static void setPINSetUp()
    {
        loadScene("PINSetUp.fxml");
    }
    public static void setNewPINEntry()
    {
        loadScene("NewPINEntry.fxml");
    }
    public static void setMethodSetUp()
    {
        loadScene("MethodSetUp.fxml");
    }

    public static void loadScene(String path)
    {

        FXMLLoader loader = new FXMLLoader(SceneLoader.class.getResource(path));
        Scene scene = null;

        try {
            Parent root = loader.load();
            scene = new Scene(root);
            String css = SceneLoader.class.getResource("/styles/app.css").toExternalForm();
            scene.getStylesheets().add(css);
            stage.show();


            if(path.equals("Loading.fxml"))
            {
                stage.setScene(scene);
                stage.setWidth(800);
                stage.setHeight(600);
                stage.setResizable(false);
                stage.centerOnScreen();
                stage.show();

            }
            if(path.equals("LogIn.fxml"))
            {
                stage.setScene(scene);
                stage.setWidth(659);
                stage.setHeight(480);
                stage.setResizable(false);
                stage.centerOnScreen();
                stage.show();
            }
            else if(path.equals("SignUp.fxml"))
            {
                stage.setScene(scene);
                stage.setWidth(510);
                stage.setHeight(750);
                stage.setResizable(false);
                stage.centerOnScreen();
                stage.show();
            }
            else if(path.equals("EmailEntryForPasswordReset.fxml")){
                stage.setScene(scene);
                stage.setWidth(659);
                stage.setHeight(480);
                stage.setResizable(false);
                stage.centerOnScreen();
                stage.show();
            }
            else if(path.equals("ChoicePage.fxml"))
            {
                stage.setScene(scene);
                stage.setFullScreenExitHint("");
                stage.setFullScreen(true);

                stage.centerOnScreen();
                if (root instanceof AnchorPane ap) {
                    ap.prefWidthProperty().bind(scene.widthProperty());
                    ap.prefHeightProperty().bind(scene.heightProperty());
                }
                stage.show();
            }
            else if(path.equals("MethodSelection.fxml"))
            {
                stage.setScene(scene);
                stage.setFullScreen(true);
                stage.show();
            }
            else if(path.equals("AppSelection.fxml"))
            {
                stage.setScene(scene);
                stage.setFullScreenExitHint("");
                stage.setFullScreen(true);

                stage.centerOnScreen();
                if (root instanceof AnchorPane ap) {
                    ap.prefWidthProperty().bind(scene.widthProperty());
                    ap.prefHeightProperty().bind(scene.heightProperty());
                }
                Font testFont = Font.loadFont(SceneLoader.class.getResourceAsStream("/assets/fonts/Inter_24pt-SemiBold.ttf"), 14);
                System.out.println(testFont.getName());
                stage.show();
            }
            else if(path.equals("Subscription.fxml"))
            {
                stage.setScene(scene);
                stage.show();
            }
            else if(path.equals("Profile.fxml"))
            {
                stage.setScene(scene);
                stage.show();
            }
            else if(path.equals("DigitInput.fxml"))
            {
                stage.setScene(scene);
                stage.show();
            }
            else if(path.equals("PasswordReset.fxml"))
            {
                stage.setScene(scene);
                stage.show();
            }
            else if(path.equals("PersonalInfoReset.fxml"))
            {
                stage.setScene(scene);
                stage.show();
            }
            else if(path.equals("PINSetUp.fxml"))
            {
                boolean wasFullScreen = stage.isFullScreen();
                stage.setScene(scene);
                stage.setFullScreen(wasFullScreen);
                stage.setFullScreenExitHint("");
                stage.centerOnScreen();
                stage.show();
            }
            else if(path.equals("NewPINEntry.fxml"))
            {
                boolean wasFullScreen = stage.isFullScreen();
                stage.setScene(scene);
                stage.setFullScreen(wasFullScreen);
                stage.setFullScreenExitHint("");
                stage.centerOnScreen();
                stage.show();
            }
            else
            {
                stage.setScene(scene);
                stage.show();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}

