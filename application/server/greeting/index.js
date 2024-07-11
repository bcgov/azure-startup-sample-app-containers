const { createDocument, getAllDocuments } = require("../lib/cosmodb");

module.exports = async function (context) {
  /* eslint-disable no-undef */
  const cosmosUri =
    `mongodb://${process.env.COSMOS_DB_ACCOUNT_NAME}:` +
    `${process.env.COSMOS_DB_PRIMARY_KEY}@${process.env.COSMOS_DB_ACCOUNT_NAME}` +
    `.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000` +
    `&appName=@${process.env.COSMOS_DB_ACCOUNT_NAME}@`;
  /* eslint-enable no-undef */

  const collectionName = process.env.COSMOS_DB_MONGO_COLLECTION;

  context.log("Full context is: " + JSON.stringify(context));

  const document = { name: "Sektor", game: "UMK3" };

  console.log(JSON.stringify(document));
  context.log(JSON.stringify(document));

  try {
    const putDocument = await createDocument(
      cosmosUri,
      collectionName,
      document
    );
    console.log(JSON.stringify(putDocument));
    context.log(JSON.stringify(putDocument));
    context.res = {
      body: {
        status: 200,
        response: JSON.parse(JSON.stringify(putDocument)),
      },
    };
  } catch (error) {
    if (error) {
      console.log(`An error has occurred: ${error}`);
      context.res = {
        body: {
          status: 500,
          message: `An error occurred while executing putDocument ${error}`,
        },
      };
    }
  }
};
