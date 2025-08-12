import { Pricing } from "~/server/models/pricing.model";

export default defineEventHandler(async (event) => {
  const method = event.req.method;
  const query = getQuery(event);

  if (method === "GET") {
    try {
      const { planType } = query;
      let filter = {};

      if (planType && (planType === "monthly" || planType === "yearly")) {
        filter = { planType: planType };
      }

      const plans = await Pricing.find(filter);
      return plans;
    } catch (error) {
      return { status: 500, message: "Error fetching pricing plans" };
    }
  }

  // Handle other methods (POST, PUT, DELETE) here if needed.
});
