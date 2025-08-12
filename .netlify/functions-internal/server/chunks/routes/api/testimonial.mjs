import { d as defineEventHandler, g as getQuery, c as createError } from '../../_/nitro.mjs';
import { t as testimonialModel } from '../../_/testimonial.model.mjs';
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

const testimonial = defineEventHandler(async (event) => {
  const method = event.node.req.method;
  console.log(method);
  getQuery(event);
  switch (method) {
    case "GET":
      const testimonial = await testimonialModel.find();
      return testimonial;
    default:
      throw createError({ statusCode: 405, statusMessage: "HTTP method is not allowed." });
  }
});

export { testimonial as default };
//# sourceMappingURL=testimonial.mjs.map
