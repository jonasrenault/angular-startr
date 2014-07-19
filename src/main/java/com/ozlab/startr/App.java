package com.ozlab.startr;

import static spark.Spark.get;
import static spark.SparkBase.setPort;
import static spark.SparkBase.staticFileLocation;

/**
 * Hello World
 */
public class App {
    public static void main(String[] args) {
        setPort(8080);
        staticFileLocation("/webapp"); // This needs to be updated in the pom.xml if changed
        get("/app", (request, response) -> "Hello World");
    }
}
