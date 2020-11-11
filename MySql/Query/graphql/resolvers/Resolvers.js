const { test } =  require('../db');

const resolvers = {
  Query:{
        test: () =>
          test()
  }
};

module.exports = {
  resolvers: resolvers
}