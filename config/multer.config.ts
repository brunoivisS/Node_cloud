import multerc from 'multer';
import {returnNomesFileForNew,setOriginalName} from '../services/NomeFiles/Nomesfiles';

export const storage = multerc.diskStorage({
   destination: (req, file, callback) => {
    callback(null, 'uploads');
   },
   filename: (req, file, callback) => {
      ///aqui pode se subtituido por uma hash do usuario

      const fileOri = file.originalname;
      setOriginalName(fileOri);
      let returnTokFile = returnNomesFileForNew();
      callback(null,`${returnTokFile}`)
            
   }
});