const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) { 
            results.push(file);
        }
    });
    return results;
}

const files = walk('D:/byzahin.com/src');
let changedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let newContent = content
        .replace(/'#606060'/g, "'var(--body-text)'")
        .replace(/"#606060"/g, "'var(--body-text)'")
        .replace(/'#919191'/g, "'var(--meta-text)'")
        .replace(/"#919191"/g, "'var(--meta-text)'");

    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        changedCount++;
        console.log('Updated: ' + file);
    }
});

console.log(`Finished updating ${changedCount} files.`);
