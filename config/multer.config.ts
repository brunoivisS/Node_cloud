import multerc from 'multer';
import path from 'path';
import {getname, returnNomesFileForNew,setOriginalName} from '../services/NomeFiles/Nomesfiles';

export const storage = multerc.diskStorage({
   destination: (req, file, callback) => {
    callback(null, 'uploads');
   },
   filename: (req, file, callback) => {
      ///aqui pode se subtituido por uma hash do usuario

      const time = new Date().getTime();
      const fileOri = file.originalname;
      setOriginalName(fileOri);
      let returnTokFile = returnNomesFileForNew();
      console.log(returnTokFile)
      callback(null,`${returnTokFile}`)
   }
});