const { User, Quote } = require('../models');


const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate('quotes')
    },
    quotes: async (parent, { userName }) => {
      const params = userName ? { userName } : {};
      return await Quote.find(params)
    }
  },

  // Mutation: {
    
  // },
};

module.exports = resolvers;
