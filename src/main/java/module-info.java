module org.example.puzzleguardinterface {
    requires javafx.controls;
    requires javafx.fxml;
    requires javafx.web;
    requires javafx.media;

    exports org.example.puzzleguardinterface.controllers to javafx.fxml;
    opens org.example.puzzleguardinterface.controllers to javafx.fxml; // This is important if you're using @FXML annotations
    


    requires org.controlsfx.controls;
    requires com.dlsc.formsfx;
    requires net.synedra.validatorfx;
    requires org.kordamp.ikonli.javafx;
    requires org.kordamp.bootstrapfx.core;
    requires eu.hansolo.tilesfx;
    requires com.almasb.fxgl.all;
    requires java.desktop;


    opens org.example.puzzleguardinterface to javafx.fxml;
    exports org.example.puzzleguardinterface;
}