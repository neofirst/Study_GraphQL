const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const { makeExecutableSchema } = require('graphql-tools');
const { fileLoader, mergeResolvers, mergeTypes } = require('merge-graphql-schemas');

const allTypes = fileLoader(path.join(__dirname, "/graphql/*.graphql"));
const allResolvers = fileLoader(path.join(__dirname, "/graphql/resolvers/*.js"));

const schema = makeExecutableSchema({
    typeDefs: mergeTypes(allTypes),
    resolvers: mergeResolvers(allResolvers)
  });

const server = new GraphQLServer({schema});

server.start(() => console.log("GraphQL Server Running"))