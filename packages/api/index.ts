import Stripe from "stripe";
const stripe = new Stripe("dummy-key", { apiVersion: "2023-10-16" });
console.log("Stripe initialized:", stripe);
export default stripe;
