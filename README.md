# A starter app for AngularJs and Java

This is a clean skeleton for an application that uses AngularJs for front end
and Java for back end.

There is pretty much no code in there, just the necessary files to start developing straight away.

On the back end, [Spark](sparkjava.com) is used to create a very basic embedded server.

## Getting Started

Use git to clone this repository.

```
git clone git@github.com:jonasrenault/angular-startr.git
```

### Install Dependencies


```
bower install & npm install
```

### Run the Application

#### Dev

The angular part of the application was generated using the yeoman [generator](https://github.com/yeoman/generator-angular) for AngularJS.
Run `grunt serve` for preview. This will start an http server with livereload to serve your Angular app. This server is configured to proxy requests
on /app to `htpp://0.0.0.0:8080`. A browser window should open automatically once the server is ready.

Run the App class as a Java main class from your IDE. It will start a server that listens on `http://0.0.0.0/8080`


#### Prod

Run `mvn clean install -Pprod`. This will first execute a `grunt build` that will prepare your angular app for production in `src/main/webapp/dist` and
copy it to `target/webapp`. It will then package both the angular app and the Java backend in an executable jar.
The App.java class is configured to serve static files in `target/webapp`.

Execute `java -jar target/start-1.0-SNAPSHOT.jar`