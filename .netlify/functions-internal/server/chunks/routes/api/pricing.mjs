import { d as defineEventHandler, g as getQuery, c as createError } from '../../_/nitro.mjs';
import { P as Pricing } from '../../_/pricing.model.mjs';
import 'node:fs/promises';
import 'node:path';
import 'nodemailer';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'mongoose';
import 'vue';
import 'jsonwebtoken';
import 'consola';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:crypto';

const pricing = defineEventHandler(async (event) => {
  const method = event.node.req.method;
  console.log(method);
  const query = getQuery(event);
  switch (method) {
    case "GET":
      if (query.id) {
        const plan = await Pricing.findById(query.id);
        return plan || { error: "Pricing plan not found" };
      } else {
        const plans = await Pricing.find();
        return plans;
      }
    // case "POST":
    //   var body = await readBody(event);
    //   return await Pricing.create(body);
    // case "PUT":
    //   var body = await readBody(event);
    //   const { _id, ...updatedData } = body;
    //   const updatedPlan = await Pricing.findByIdAndUpdate(_id, updatedData, { new: true });
    //   return updatedPlan || { error: "Failed to update pricing plan" };
    // case "DELETE":
    //   var body = await readBody(event);
    //   const { id: deleteId } = body;
    //   const deletedPlan = await Pricing.findByIdAndDelete(deleteId);
    //   return deletedPlan ? { success: true } : { error: "Failed to delete pricing plan" };
    default:
      throw createError({ statusCode: 405, statusMessage: "HTTP method is not allowed." });
  }
});

export { pricing as default };
//# sourceMappingURL=pricing.mjs.map
