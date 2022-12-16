const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URL;

module.exports = {
  getConnection: async (collection_name) => {
    try {
      const client = new MongoClient(uri);
      await client.connect();
      const collection = client
        .db(process.env.MONGODB_DATABASE)
        .collection(collection_name);
      return [collection, client];
    } finally {
      await client.close();
    }
  },
};
