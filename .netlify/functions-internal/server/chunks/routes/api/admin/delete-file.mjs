import { d as defineEventHandler, g as getQuery } from '../../../_/nitro.mjs';
import fs from 'fs';
import path from 'path';
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

const deleteFile = defineEventHandler(async (event) => {
  if (event.node.req.method !== "DELETE") {
    return { error: "Method not allowed" };
  }
  const query = getQuery(event);
  const filePath = path.join("public", query.fileurl);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    return { success: true, message: "File deleted successfully" };
  } else {
    return { error: "File not found" };
  }
});

export { deleteFile as default };
//# sourceMappingURL=delete-file.mjs.map
