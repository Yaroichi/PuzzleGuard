package org.example.puzzleguardinterface;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class UserDAO {
    public static void insertUser(String name,String surname,String email,String password){
        String query = "SELECT insert_user(?,?,?,?)";
        try(Connection conn = DatabaseManager.getConn();
            PreparedStatement statement = conn.prepareStatement(query);) {

            statement.setString(1,name);
            statement.setString(2,surname);
            statement.setString(3,email);
            statement.setString(4,password);

            ResultSet result = statement.executeQuery();
            System.out.println(" Connection successful.Amount of rows: " + result);

        } catch(SQLException e) {
            System.out.println(" Connection failed");
            e.printStackTrace();
        }
    }
}
