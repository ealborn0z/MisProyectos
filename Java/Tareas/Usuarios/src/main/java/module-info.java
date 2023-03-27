module com.example.usuarios {
    requires javafx.controls;
    requires javafx.fxml;

    requires org.kordamp.bootstrapfx.core;

    opens com.example.usuarios to javafx.fxml;
    exports com.example.usuarios;
}