const { User, Quote } = require('../models');
const { AuthenticationError }= require('apollo-server-express')
const { signToken } = require('../utils/auth')


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

  Mutation: {
    addUser: async ( parent, {userName, email, password }) => {
      const user= await User.create({ userName, email, password});
      const token = signToken(user);
      return {token, user};
   
  },
  login: async ( parent, { email, password }) => {
    const user = await User.findOne({ email });

    if (!user) {
      throw new AuthenticationError('No user with this email found');
    }
    const correctPw = await user.isCorrectPassword(password);

    if (!correctPw) {
      throw new AuthenticationError('Incorrect Password');
    }
    const token = signToken(user);
    return { token, user };
  }
}
};

module.exports = resolvers;
