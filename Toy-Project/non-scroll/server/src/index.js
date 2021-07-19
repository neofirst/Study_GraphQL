import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import cors from 'cors'
import resolvers from './resolvers/index.js'
import schema from './schema/index.js'
import { readDB } from './dbController.js'

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    db: {
      messages: readDB('messages'),
      users: readDB('users'),
    },
  },
});

await server.start();

const app = express();

// cors 방법1
// 3.x 버전에서는 cors 오류 발생
// 
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     credentials: true,
//   }),
// );

// cors 방법2
// 2.x 버전 및 3.x 버전 cors
// case 1
// const corsOptions = {
//   origin(origin, callback) {
//       callback(null, true);
//   },
//   credentials: true
// };
// app.use(cors(corsOptions));
// var allowCrossDomain = function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type,token');
//   next();
// }
// app.use(allowCrossDomain);

// server.applyMiddleware({ app, path: '/graphql' });
// app.listen(8000, () => {
//   console.log('server listening on 8000...');
// })

// case 2
server.applyMiddleware({
   app, 
   path: '/graphql',
   cors: {
        origin: ['http://localhost:3000', 'https://studio.apollographql.com/'],
        credentials: true,
      } 
  });

await app.listen({port : 8000 });
console.log('server listening on 8000...');