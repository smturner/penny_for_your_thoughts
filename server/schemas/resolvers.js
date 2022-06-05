const { User, Quote } = require('../models');
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/auth')


const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate('quotes').populate('follows')
    },

    quotes: async () => {
      return await Quote.find().sort({ createdAt: -1 }).populate('quotePoster');
    },

    quote: async (parent, { quoteId }) => {
      return Quote.findOne({ _id: quoteId }).populate('quotePoster');
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId }).populate('quotes');
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).sort({ createdAt: -1 }).populate('quotes')
      }
    },
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

    addQuote: async (parent, { quoteText, quoteAuthor }, context) => {
      console.log("Context.user: ", context.user);
      if(context.user) {
        const quote = await Quote.create({ 
          quoteText, 
          quoteAuthor, 
          quotePoster: context.user._id,
        })
        return await User.findOneAndUpdate(
          {_id: context.user._id},
          {$addToSet: { quotes: quote._id}},
          {new: true}
          ).populate('quotes')
      }
      throw new AuthenticationError('You need to be logged in');
    },
  
    removeQuote: async (parent, { quoteId }, context) => {
      if (context.user) {
        const quote = await Quote.findOneAndDelete({
          _id: quoteId,
          quotePoster: context.user._id
        },
        {new:true}
        );

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { quotes: quoteId}}
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


    addFollow: async (parent, { userName }, context) => {
      const newFollow = await User.findOne({ userName })
      
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: {follows: newFollow._id }},
          { new: true }
        ).populate('follows');
      }
    },

    removeFollow: async (parent, { userName }, context) => {
      const newFollow = await User.findOne({ userName })

      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: {follows: newFollow._id }},
          { new: true}
        ).populate('follows');
      }
    },
  }
};

module.exports = resolvers;
