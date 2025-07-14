package org.example.puzzleguardinterface;

import javafx.animation.PauseTransition;
import javafx.application.Application;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.stage.Stage;
import javafx.scene.layout.StackPane;
import javafx.scene.media.Media;
import javafx.scene.media.MediaPlayer;
import javafx.scene.media.MediaView;
import javafx.util.Duration;

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
    public static void setNewPasswordEntry()
    {
        loadScene("NewPasswordEntry.fxml");
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
            scene = new Scene(loader.load());
            String css = SceneLoader.class.getResource("/styles/app.css").toExternalForm();
            scene.getStylesheets().add(css);
            stage.show();
        } catch (IOException e) {
            e.printStackTrace();
        }

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
            stage.setHeight(430);
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
        else if(path.equals("ChoicePage.fxml"))
        {
            stage.setScene(scene);
            stage.show();
        }
        else if(path.equals("MethodSelection.fxml"))
        {
            stage.setScene(scene);
            stage.show();
        }
        else if(path.equals("AppSelection.fxml"))
        {
            stage.setScene(scene);
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
            stage.setScene(scene);
            stage.show();
        }
        else if(path.equals("NewPasswordEntry.fxml"))
        {
            stage.setScene(scene);
            stage.show();
        }
        else
        {
            stage.setScene(scene);
            stage.show();
        }


    }
}