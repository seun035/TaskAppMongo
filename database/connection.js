// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('task.db', 'user', 'pass', {
//     dialect: 'sqlite',
//     host: './dev.sqlite'
//   });

// module.exports = sequelize;
const dotenv = require('dotenv');
dotenv.config();
const {MongoClient} = require('mongodb');
const client = new MongoClient(process.env.CONNECTIONSTRING);

const connection = async () => {
  try {
    await client.connect();
  } catch (error) {
    console.log(error);
    client.close();
  } finally {
  }
}

module.exports.client = client;
module.exports.connection = connection;