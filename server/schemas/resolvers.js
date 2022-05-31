const { User, Quote } = require('../models');
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/auth')


const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate('quotes')
    },

    quotes: async (parent, { userName }) => {
      const params = userName ? { userName } : {};
      return await Quote.find(params)
    },

    quote: async (parent, { quoteId }) => {
      return Quote.findOne({ _id: quoteId });
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId }).populate('quotes');
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('quotes')
      }
    }
  },

  Mutation: {
    addUser: async (parent, { userName, email, password }) => {
      const user = await User.create({ userName, email, password });
      const token = signToken(user);
      return { token, user };

    },

    login: async (parent, { email, password }) => {
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
    },

    // When we build front end, figure out where we are getting the userName or User Id to follow.    
    // addFollow: async (parent, { userName }, context) => {
    //   const newFollowId = await User.findOne({ userName })

    //   if (context.user) {
    //     return User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $addToSet: {follows: newFollowId }},
    //       { new: true }
    //     )
    //   }
    // }
  }
};

module.exports = resolvers;
