import { d as defineEventHandler } from '../../_/nitro.mjs';
import { model, Schema } from 'mongoose';
import 'node:fs/promises';
import 'node:path';
import 'nodemailer';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'vue';
import 'jsonwebtoken';
import 'consola';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:crypto';

const ZoomSchema = new Schema({
  link: String,
  scheduled: String
});
const ZoomSchedule = model("Zoom", ZoomSchema);

const zoom_get = defineEventHandler(async (event) => {
  const Zoom = await ZoomSchedule.findOne();
  return Zoom;
});

export { zoom_get as default };
//# sourceMappingURL=zoom.get.mjs.map
