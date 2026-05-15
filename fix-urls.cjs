const fs = require('fs');
const path = require('path');

const pagesDir = path.join(process.cwd(), 'src', 'pages');
const componentsDir = path.join(process.cwd(), 'src', 'components');

const filesToProcess = [
    ...fs.readdirSync(pagesDir).map(file => path.join(pagesDir, file)),
    ...fs.readdirSync(componentsDir).map(file => path.join(componentsDir, file)),
    path.join(process.cwd(), 'index.html')
];

filesToProcess.forEach(filePath => {
    if (fs.statSync(filePath).isFile() && (filePath.endsWith('.jsx') || filePath.endsWith('.html'))) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Fix URLs
        content = content.replace(/assets\/videos\/golden spoon restaurant/g, 'assets/videos/spicyhunt');
        content = content.replace(/assets\/videos\/Golden Spoon Restaurant/g, 'assets/videos/spicyhunt');
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed: ${filePath}`);
    }
});
