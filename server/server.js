// Importing Express and the ApolloServer class
const express = require('express');
const { ApolloServer } = require('apollo-server-express');

// Importing the components of the GraphQL schema and our db connection
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

// Defining the port and creating our server object
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
    typeDefs,
    resolvers
});

// Initializing our instance of express
const app = express();

// Enabling the use of json and url-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Creating a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`Server now running on port ${PORT}`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        });
    });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);