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
        throw new AuthenticationError(`No user with this ${email} found`);
      }
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect Password');
      }
      const token = signToken(user);
      return { token, user };
    },

    // We need to test this on the front end because we need the CONTEXT
    addQuote: async (parent, { quoteText, quoteAuthor }, context) => {
      if(context.user) {
        const quote = await Quote.create({ 
          quoteText, 
          quoteAuthor, 
          quotePoster: context.user._id,
        });
        return await User.findOneAndUpdate(
          {_id: context.user._id},
          {$addToSet: { quotes: quote._id}},
          {new: true}
          ).populate('quotes')
          // return quote;

      }
      // const token = signToken(user);
      // return user
    },

    removeQuote: async (parent, { quoteId }, context) => {
      if (context.user) {
        const quote = await Quote.findOneAndDelete({
          _id: quoteId,
          quotePoster: context.user._id
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { quotes: quote._id}}
        )
        return quote;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    updateQuote: async (parent, { quoteId, quoteText, quoteAuthor }) => {
      return Quote.findByIdAndUpdate(
        quoteId,
        { quoteText, quoteAuthor },
        {new: true}
      )
    },


    // When we build front end, figure out where we are getting the userName or User Id to follow. 
    // Again, we need front end to test this because we need context   
    addFollow: async (parent, { userName }, context) => {
      const newFollow = await User.findOne({ userName })

      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: {follows: newFollow._id }},
          { new: true }
        )
      }
    },

    removeFollow: async (parent, { userName }, context) => {
      const newFollow = await User.findOne({ userName })

      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: {follows: newFollow._id }},
        )
      }
    },
  }
};

module.exports = resolvers;
