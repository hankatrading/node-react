const key = require("./config/key");
const stripe = require("stripe")(key.STRIPE_SECRET_KEY);

console.log(key.STRIPE_SECRET_KEY);

const getToken = async () => {
  console.log("Token request");

  let token = await stripe.tokens.create({
    card: {
      number: "4242424242424242",
      exp_month: "5",
      exp_year: "2026",
      cvc: "314",
    },
  });

  console.log("Token ID: ", token.id);
};

const charge = async () => {};

module.exports = {
  getToken,
  charge,
};
