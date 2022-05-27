const db = require('../config/connection');
const { User, Quote } = require('../models');
const quoteSeeds = require('./quotesData.json');
const userData = require('./userData.json');

db.once('open', async () => {
  try {
    //delete all existing Users and Quotes.
    await User.deleteMany({});
    await Quote.deleteMany({});

    //Insert the 3 dummy users from the userData.json file.
    const users = await User.insertMany(userData);

    //Insert the dummy quotes.
    for (let i = 0; i < quoteSeeds.length; i++) {
      const { _id, quotePoster } = await Quote.create(quoteSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: quotePoster },
        {
          $addToSet: {
            quotes: _id,
          }
        }
      )
    }
  } catch (err) {
    console.error(err);
    process.exit(1)
  }

  console.log('Users and quotes are Seeded!');
  process.exit(0);
});
