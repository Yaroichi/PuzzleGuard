package org.example.puzzleguardinterface;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseManager {
    private static final String url = "jdbc:postgresql://localhost:5432/postgres?currentSchema=puzzleguard";
    private static final String user = "postgres";
    private static final String password = "Scpckr1@3";

    public static Connection getConn() throws SQLException {
        return DriverManager.getConnection(url, user, password);
    }
}
