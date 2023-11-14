
const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 3000; //Line 3
var cors = require("cors");
const stripe = require('stripe')('sk_test_51LPzSaAmJKzU86rcPkixEgsmzCDCKkeSKE9JiRstspOC4RbvaJm3qHlm3NqrBFWhcRiFg2hoDSCqQE879PbAJhHN00W0ePS1ZA')
var bodyParser = require('body-parser')

app.use(cors());

// This displays message that the server runode nning and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));


app.get('/products', (req, res) => {
  const product = getProduct().then((result) => {
    for (let i = 0; i < result.data.length; i++) {
      result.data[i].key = i;
      result.data[i].quantity = 0;
    }
    res.json({ products: result.data })
  });
});

app.get('/prices', (req, res) => {
  getPrice().then((result) => {
    res.json({ price: result.data })
  })
})

const getPrice = async () => {
  return new Promise(function (resolve, reject) {
    const price = stripe.prices.list({
      limit: 100,
    });
    resolve(price);
  })
}
const getProduct = async () => {
  return new Promise(function (resolve, reject) {
    const products = stripe.products.list({
      limit: 100,
    });
    resolve(products);
  })
}

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = "whsec_4d9d5aa5c272302bf5f15227b8ed33bc1b8b0395ca62c0ace56a8cd286294626";

app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
  const sig = request.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntentSucceeded = event.data.object;
      // Then define and call a function to handle the event payment_intent.succeeded
      console.log("PAYMENT INTENT SUCCEEDED");
      console.log(paymentIntentSucceeded);

      break;
    // ... handle other event types
    case 'checkout.session.completed':
      const checkoutSessionCompleted = event.data.object;
      console.log("CHECKOUT SESSION");
      console.log(checkoutSessionCompleted);
      stripe.checkout.sessions.listLineItems(
        checkoutSessionCompleted.id,
        function(err, lineItems) {
          console.log(lineItems);
        }
      )
    
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
});

app.use(bodyParser.json());

