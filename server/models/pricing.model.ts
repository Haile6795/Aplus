import { Schema, model } from "mongoose";

const pricingSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  planType: {
    type: String,
    enum: ["monthly", "yearly"],
    required: true,
  },
  features: {
    type: [String],
    required: true,
  },
  isPopular: {
    type: Boolean,
    default: false,
  },
});

export const Pricing = model("Pricing", pricingSchema);
