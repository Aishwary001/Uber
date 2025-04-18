const mongoose =  require('mongoose');
const connectToDb = () => {
    const uri = process.env.DB_CONNECT;
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB', err));
}

module.exports = connectToDb; 