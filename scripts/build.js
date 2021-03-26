const { readdir } = require('fs').promises;
const { exec } = require('child_process');

var fs = require('fs');
var rimraf = require("rimraf");
const path = 'dist';

if (fs.existsSync(path)) {
    rimraf.sync(path);
}

if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
}

fs.createReadStream('index.html').pipe(fs.createWriteStream('dist/index.html'));

// cerca i file js dentro la cartella build (generati da babel e li minifica)
;(async () => {
    for await (const f of getFiles('build')) {
        if(f) {
            console.log(f);
            if(f.ext == '.js') {
                const minName = f.name.split('.')[0]+'.min'+f.ext;
                const command = `npx terser -c -m -o dist/${minName} -- ${f.path}`;
                console.log(command)
                exec(command);
            }  else if(f.ext == '.css') {
                const minName = f.name.split('.')[0]+'.min'+f.ext;
                fs.createReadStream(f.path).pipe(fs.createWriteStream(`dist/${minName}`));
            }
        }     
    }
  })()


/**
 * cerca ricorsivamente nella cartella i file js e css
 * @param {string} dir 
 * @returns {path: string, name: string, ext:string}
 */
async function* getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = dir + '/' +dirent.name;
    const ext = (dirent.name.match(/\.js$|\.css$/g) || [])[0];
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else if (ext){
      yield {path: res, name: dirent.name, ext};
    } else {
      yield null;
    }
  }
}

