package org.example.puzzleguardinterface.controllers;

import javafx.application.Platform;
import javafx.fxml.FXML;
import javafx.scene.control.TextField;
import javafx.scene.control.TextFormatter;
import javafx.scene.image.Image;
import javafx.scene.input.KeyCode;
import javafx.scene.layout.*;
import org.example.puzzleguardinterface.SceneLoader;

import java.util.ArrayList;

public class DigitInputController {
    @FXML
    private BorderPane root;
    @FXML
    private TextField digit1;
    @FXML
    private TextField digit2;
    @FXML
    private TextField digit3;
    @FXML
    private TextField digit4;
    @FXML
    private TextField digit5;

    private ArrayList<TextField> digits = new ArrayList<>(6);


    @FXML
    private TextField digit6;

    private void addFieldsToArrayList(){
        digits.add(digit1);
        digits.add(digit2);
        digits.add(digit3);
        digits.add(digit4);
        digits.add(digit5);
        digits.add(digit6);
    }

    @FXML public void initialize(){
        BackgroundImage bg = new BackgroundImage(new Image(AppSelectionController.class.getResource("/assets/img/background2.jpg").toExternalForm()), BackgroundRepeat.NO_REPEAT,BackgroundRepeat.NO_REPEAT, BackgroundPosition.CENTER,new BackgroundSize(100,100,true,true,true,true));
        root.setBackground(new Background(bg));

        TextFormatter<String> formatter1 = new TextFormatter<>(change ->{
            String newText = change.getControlNewText();
            return newText.matches("\\d{0,1}") ? change : null;
        });

        TextFormatter<String> formatter2 = new TextFormatter<>(change ->{
            String newText = change.getControlNewText();
            return newText.matches("\\d{0,1}") ? change : null;
        });

        TextFormatter<String> formatter3 = new TextFormatter<>(change ->{
            String newText = change.getControlNewText();
            return newText.matches("\\d{0,1}") ? change : null;
        });

        TextFormatter<String> formatter4 = new TextFormatter<>(change ->{
            String newText = change.getControlNewText();
            return newText.matches("\\d{0,1}") ? change : null;
        });

        TextFormatter<String> formatter5 = new TextFormatter<>(change ->{
            String newText = change.getControlNewText();
            return newText.matches("\\d{0,1}") ? change : null;
        });

        TextFormatter<String> formatter6 = new TextFormatter<>(change ->{
            String newText = change.getControlNewText();
            return newText.matches("\\d{0,1}") ? change : null;
        });
        digit1.setTextFormatter(formatter1);
        digit2.setTextFormatter(formatter2);
        digit3.setTextFormatter(formatter3);
        digit4.setTextFormatter(formatter4);
        digit5.setTextFormatter(formatter5);
        digit6.setTextFormatter(formatter6);

        addFieldsToArrayList();
        for(int i = 0;i< digits.size();i++){
            final int index = i;
            TextField current = digits.get(i);

            current.textProperty().addListener((obs,oldText,newText) -> {
                if(!newText.isEmpty() && index != digits.size() -1){
                    digits.get(index + 1).requestFocus();
                }
            });


            current.setOnKeyPressed((event) ->{
                KeyCode code = event.getCode();
                if(code == KeyCode.BACK_SPACE){
                    if(current.getText().isEmpty() && index > 0){
                        digits.get(index -1).requestFocus();
                        Platform.runLater(() -> digits.get(index -1).positionCaret(digits.get(index -1).getText().length()));
                    }
                }
            });
        }
    }
    @FXML
    private void goBackToProfile()
    {
        SceneLoader.setProfile();;
    }

    @FXML
    private void resetPassword()
    {
        SceneLoader.setPasswordReset();
    }

//
}
