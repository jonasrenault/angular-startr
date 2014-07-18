package com.ozlab.startr;

import static spark.Spark.get;
import static spark.SparkBase.setPort;

/**
 * Hello World
 */
public class App {
    public static void main(String[] args) {
        setPort(8080);
        get("/app", (request, response) -> "Hello World");
    }
}
