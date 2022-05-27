const { Schema, model } = require('mongoose');

const quoteSchema = new Schema({
    
    quoteText: {
        type: String,
        required: true,
        maxLength: [360, 'Quotes must be under 360 characters.']
    },

    quoteAuthor: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },

    //connect the quote to who posted it.
    quotePoster: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

})



const Quote = model('Quote', quoteSchema);

module.exports = Quote;