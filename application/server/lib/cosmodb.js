const MongoClient = require("mongodb").MongoClient;

const createDocument = async (cosmosUri, collectionName, document) => {
  const client = new MongoClient(cosmosUri);
  let collection;

  try {
    await client.connect();
    collection = client.db().collection(`${collectionName}`);
    const response = await collection.insertOne(document);
    console.log(`Inserted document response: ${JSON.stringify(response)}`);
    return response;
  } catch (error) {
    if (error) {
      console.log(`An error has occurred: ${error}`);
      throw new Error(error);
    }
  } finally {
    await client.close();
  }
};
module.exports.createDocument = createDocument;

const findDocument = async (cosmosUri, collectionName, document) => {
  const client = new MongoClient(cosmosUri);
  let collection;

  try {
    await client.connect();
    collection = client.db().collection(`${collectionName}`);
    const response = await collection.find(document);
    console.log(`Successfully found document with the _id: ${response}`);
    return response;
  } catch (error) {
    if (error) {
      console.log(`An error has occurred: ${error}`);
      throw new Error(error);
    }
  } finally {
    await client.close();
  }
};
module.exports.findDocument = findDocument;

const getAllDocuments = async (cosmosUri, collectionName) => {
  const client = new MongoClient(cosmosUri);
  let collection;

  try {
    await client.connect();
    collection = client.db().collection(`${collectionName}`);
    const cursor = collection.find({});
    return await cursor.toArray();
  } catch (error) {
    if (error) {
      console.log(`An error has occurred: ${error}`);
      throw new Error(error);
    }
  } finally {
    await client.close();
  }
};
module.exports.getAllDocuments = getAllDocuments;
