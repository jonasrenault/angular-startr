# A starter app for AngularJs and Java

This is a (somewhat) clean skeleton for an application that uses AngularJs for front end
and Java for back end.

There is pretty much no code in there, just the necessary files to start developping straight away.

On the front end there's a single index page with basic internationalization.

On the back end, Spark is used to create a very basic server.

## Getting Started

Use git to clone this repository. 

### Install Dependencies


```
npm install & bower install
```

### Run the Application

Run the App class as a normal Java class.

Start a local server for the front end with :

```
grunt server
```

This will automatically open a new browser window at `http://0.0.0.0/9000`
The grunt server will proxy routes /app, /metrics, /dump & /api-docs to `http://0.0.0.0/8080`