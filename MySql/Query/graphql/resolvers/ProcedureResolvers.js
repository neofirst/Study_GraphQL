const { proceducreTest } = require('../db');

const resolvers = {
  Query:{
    proceducreTest: (_, args) => 
      proceducreTest(args.id)
  }
};

module.exports = {
  resolvers: resolvers
}