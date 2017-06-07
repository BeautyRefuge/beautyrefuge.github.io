const shell = require('shelljs');
const format = require('date-fns/format');

const repoUrl = 'https://github.com/BeautyRefuge/beautyrefuge.github.io.git';


// create deploy folder
shell.rm('-rf', 'deploy');
shell.mkdir('deploy');

// clone repo into deploy folder to keep commit history
shell.exec(`git clone ${repoUrl} deploy`);
shell.cd('deploy');
shell.exec('git checkout master');

// delete all files except for .git directory
shell.exec('git rm -rf .');
shell.exec('git clean -fxd');

shell.cp('-R', '../dist/*', '../deploy');
shell.exec('git add -A');
shell.exec(`git commit -m 'Site updated: ${format(Date.now(), 'YYYY-MM-DD HH:mm:ss')}'`);
shell.exec(`git push -u ${repoUrl} HEAD:master --force`);
