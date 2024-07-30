const keys = require("../config/key");
const requireLogin = require("../middleware/requireLogin");
const stripe = require("stripe")(keys.STRIPE_SECRET_KEY);

module.exports = (app) => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "Charging Customer Credits: 5$ for 5 credits",
      source: req.body.id,
    });

    req.user.credits += 5;

    let user = await req.user.save();
    req.send(user);
  });
};
