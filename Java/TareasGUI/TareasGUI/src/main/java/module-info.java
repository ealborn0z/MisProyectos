module com.example.tareasgui {
    requires javafx.controls;
    requires javafx.fxml;

    requires org.kordamp.bootstrapfx.core;
    requires java.desktop;

    opens com.example.tareasgui to javafx.fxml;
    exports com.example.tareasgui;
}