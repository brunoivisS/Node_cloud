import {returnTokenFile} from '../TokenFile/TokenFile';
  
const fs = require('fs');
const dir = './uploads';

let originalname:string;
// export function setOriginalName(name: string) {
//   originalname = name; // Define o valor da variável originalname
// }
  export function setOriginalName(name:string) {
      originalname = name;   
  }
  export function getname(): string | undefined {
      try {
          return originalname;
      } catch (err){
        return undefined
      }
  }


export function returnNomesFiles(): void {
    fs.readdir(dir, (err:string, arquivos:string) => {
        if (err) {
          console.log('Ocorreu um erro ao ler o diretório:', err);
          return;
        }
      
        if (!Array.isArray(arquivos)) {
          console.log('O conteúdo do diretório não é um array de arquivos.');
          return;
        }
      
        arquivos.forEach((arquivo) => {
          const extension = arquivo.split('.').pop();
          const File =  returnTokenFile();
          fs.copyFile(`./uploads/${arquivo}`, `./uploads/${File}.${extension}`, (err:string) => {
            if (err) {
              console.log('Ocorreu um erro ao copiar o arquivo:', arquivo, err);
              return;
            }
      
            console.log(`Arquivo copiado com sucesso: ${arquivo}`);
          });
        });
      });

}

export function returnNomesFileForNew() {
  // return for varival 435ufef90fefw90.mp3
  let namewithExten = getname();
  if(namewithExten === undefined) {
      console.log('the Name with Extensi is return undefined');
  }else{
    try{
      let FileTok = returnTokenFile();
      const extensi = namewithExten.split('.').pop();
      const TokenwithExt = `${FileTok}.${extensi}`;
      return TokenwithExt;
    }catch (err){
      console.log(err);
    }
  }






}
