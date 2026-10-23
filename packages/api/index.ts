import Stripe from "stripe";
const stripe = new Stripe("dummy-key", { apiVersion: "2023-10-16" });

async function runStripeOperations() {
  // Call Site 1: Not affected by the change
  const customer = await stripe.customers.create({
    email: "test@example.com",
  });
  console.log("Customer created:", customer.id);

  // Call Site 2: Affected by the breaking change (uses amount)
  const paymentIntent = await stripe.paymentIntents.create({
    amount_cents: 2000,
    currency: "usd",
  });
  console.log("Payment Intent created:", paymentIntent.id);

  // Call Site 3: Not affected by the change
  const charge = await stripe.charges.create({
    amount: 1500,
    currency: "usd",
    source: "tok_visa",
  });
  console.log("Charge created:", charge.id);
}

runStripeOperations().catch(console.error);
export default stripe;
