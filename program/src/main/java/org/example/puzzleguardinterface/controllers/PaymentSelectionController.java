package org.example.puzzleguardinterface.controllers;

import javafx.fxml.FXML;
import javafx.scene.control.CheckBox;
import javafx.scene.image.Image;
import javafx.scene.layout.*;
import org.example.puzzleguardinterface.SceneLoader;

import java.util.ArrayList;

public class PaymentSelectionController {
    @FXML
    private BorderPane root;

    @FXML
    private CheckBox circleBox1;
    @FXML
    private CheckBox circleBox2;
    @FXML
    private CheckBox circleBox3;

    private ArrayList<CheckBox> circles = new ArrayList<>(3);

    private void addElementsToCircles(){
        circles.add(circleBox1);
        circles.add(circleBox2);
        circles.add(circleBox3);
    }
    @FXML
    public void initialize(){
        BackgroundImage bg = new BackgroundImage(new Image(AppSelectionController.class.getResource("/assets/img/background2.jpg").toExternalForm()), BackgroundRepeat.NO_REPEAT,BackgroundRepeat.NO_REPEAT, BackgroundPosition.CENTER,new BackgroundSize(100,100,true,true,true,true));
        root.setBackground(new Background(bg));

        addElementsToCircles();
        for(int i = 0;i<circles.size();i++){
            int index = i;
            CheckBox current = circles.get(i);

            current.selectedProperty().addListener((obs,wasSelected,Selected) -> {
                if(Selected){
                    for(int j = 0;j<circles.size();j++){
                        if(j != index){
                            circles.get(j).setSelected(false);
                        }
                    }
                }

            } );
        }

    }
    @FXML
    private void goBackToSubscriptions(){
        SceneLoader.setSubscription();
    }
}
