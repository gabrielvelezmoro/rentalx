import multer from "multer";
import { resolve } from "path";
import crypt from "crypto";

export default {
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, "", "", folder),
        filename: (request, file, callback) => {
          const fileHash = crypt.randomBytes(16).toString("hex");
          const fileName = `${fileHash}-${file.originalname}`;

          return callback(null, fileName);
        },
      }),
    };
  },
};
