const { selectTest, insertTest, updateTest, deleteTest } = require('../db');

const resolvers = {
  Query:{
          selectTest: (_, args) => {
            selectTest(args.id, args.nick);
        },
          insertTest:(_, args) => {
            insertTest(args.id, args.email, args.nick);
        },
          updateTest:(_, args) => {
            updateTest(args.nick, args.id);
        },
          deleteTest:(_, args) => {
            deleteTest(args.id);
        }
  }
};

module.exports = {
  resolvers: resolvers
}