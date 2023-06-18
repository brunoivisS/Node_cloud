import multerc from 'multer';
import path from 'path';

export const storage = multerc.diskStorage({
   destination: (req, file, callback) => {
    callback(null, 'uploads');
   },
   filename: (req, file, callback) => {
      ///aqui pode se subtituido por uma hash do usuario

      const time = new Date().getTime();
      const codeuser = "geijgf";
      callback(null,`${time}_${file.originalname}`)
   }
});