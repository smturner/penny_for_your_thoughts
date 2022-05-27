const { User, Quote } = require('../models');


const resolvers = {
  Query: {
    users: async () => {
      return User.find()
    },
    quotes: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Quote.find(params)
    }
  },

  Mutation: {
    
  },
};

module.exports = resolvers;
