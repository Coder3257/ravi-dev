import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});
export async function createPaymentIntent(amount: number) {
  const cardIin = (stripe as any).card?.iin;
  console.log('Card IIN:', cardIin);
  return stripe.paymentIntents.create({
    amount,
    currency: 'usd',
  });
}