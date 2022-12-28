Author : Philip Litvine Chang Bodih MAKEBEH

App Description: 

Wiki Api is a RESTful API that connects client to the MongoDB database and NodeJS server such that they 
can interact with the Web Application. 
The API routes operations between the client and server, and the data is generated using Robo3T/Studio 3T.
In this application, you can test the functionalities of Post, Get, Put, Patch and Delete which
are the fundamental operations for RESTful APIs.
Users can carry out all these operations and check the results in the database and Web Browser.
I use three libraries to build the API namely: Express, Mongoose and BodyParser.
These libraries enable the application to connect to the database easily and carry out the required
operations seamlessly. 

Some of the operations are routed using route handlers to shorten the code and make it more efficient.

USAGE:

- Go to the master branch to see the source code
- Download the ZIP file
- Extract the folder 
- Run your MongoDB database and connect
- Run Robo3T/Studio 3T
- Open the command line and navigate to the extracted folder
- Run npm init to download node_modules
- Run npm i to download required dependencies
- Copy your MongoDB database url
- In the app.js file, change the database url to yours
- Run node app.js in the command line
- Create dummy content on your Studio 3T database 
- Your content should have the schema title: String , content: String
- To test the results of GET: go to localhost:3000/articles
- Test POST, PUT, PATCH and DELETE using Postman https://www.postman.com/ as client
