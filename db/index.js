const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// Old version
// const connectDB = async () => {
//   try {
//     await mongoose.connect(db, {
//       // useNewUrlParser: true, useUnifiedTopology: true
//       //  useNewUrlParser: true, useCreateIndex: true
//     });

//     console.log("MongoDB Connected .<.<.<.")
//   } catch(err) {
//     console.log('hmm?')
//     console.log(err.message);
//     //exit process with failure
//     process.exit(1);
//   }
// }

// strictQuery: false
// const connectDB = async () => {
//   try {
//     mongoose.set('strictQuery', false); // Set strictQuery to false
//     await mongoose.connect(db, {
//       // Other connection options
//     });

//     console.log("MongoDB Connected .<.<.<.");
//   } catch (err) {
//     console.log('hmm?');
//     console.error(err.message);
//     // Exit process with failure
//     process.exit(1);
//   }
// };

// strictQuery: true
const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true); // Set strictQuery to true
    await mongoose.connect(db, {
      // Other connection options
    });

    console.log("MongoDB Connected .<.<.<.");
  } catch (err) {
    console.log('hmm?');
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;