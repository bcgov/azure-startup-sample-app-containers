module.exports = async function (context) {
  try {
    context.res = { body: "We have images!" };
  } catch (error) {
    const err = JSON.stringify(error);
    context.res = {
      status: 500,
      body: `Request error. ${err}`,
    };
  }
};
