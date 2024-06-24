const keys = require("../config/key");
const stripe = require("stripe")(keys.STRIPE_SECRET_KEY);

module.exports = (app) => {
  app.post("/api/stripe", async (req, res) => {
    let charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "Charging Customer Credits: 5$ for 5 credits",
      source: req.body.id,
    });

    console.log(charge);
  });
};
