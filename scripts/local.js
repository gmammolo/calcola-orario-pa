const chokidar = require('chokidar');
const { exec } = require('child_process');

const paths = ['src', 'index.html'];
const watchers = [];
paths.forEach((path)=>{
    watchers.push(chokidar.watch(path, {ignored: /^\./, persistent: true}));

})

watchers.forEach(watcher => {
    watcher
    .on('add', function(path) {console.log('File', path, 'has been added'); updateDist();})
    .on('change', function(path) {console.log('File', path, 'has been changed'); updateDist();})
    .on('unlink', function(path) {console.log('File', path, 'has been removed'); updateDist();})
    .on('error', function(error) {console.error('Error happened', error);})
})

function updateDist() {
    exec('npm run build');
}
