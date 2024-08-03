const keys = require("../config/key");
const requireLogin = require("../middleware/requireLogin");
const stripe = require("stripe")(keys.STRIPE_SECRET_KEY);

module.exports = (app) => {
  app.post("/api/stripe", async (req, res) => {
    if (requireLogin) {
      try {
        let data = {
          amount: 500,
          currency: "usd",
          description: "Charging Customer Credits: 5$ for 5 credits",
          source: req.body.id,
        };

        await stripe.charges.create(data);

        req.user.credits += 5;

        let user = await req.user.save();
        res.send(user);
      } catch (err) {
        let message = "An error occurred while processing your payment.";

        if (err.type === "StripeCardError") {
          message = err.message;
        }

        res.status(500).send(message);
      }
    }
  });
};
