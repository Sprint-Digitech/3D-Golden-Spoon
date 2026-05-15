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
        
        // Branding
        content = content.replace(/Spicyhunt/g, 'Golden Spoon Restaurant');
        content = content.replace(/SpicyHunt/g, 'Golden Spoon Restaurant');
        content = content.replace(/spicyhunt/g, 'golden spoon restaurant');
        
        // Prices
        content = content.replace(/\$/g, '₹');
        
        // Download App removal - use string split/join or simple replace for complex strings
        const downloadStr1 = '<a href="#" className="download-app-btn">download app <i className="fa-brands fa-google-play"></i></a>';
        const downloadStr2 = '<a href="#" className="download-app-btn">download app <i className="fa-brands fa-google-play"></i></a>';
        
        content = content.split(downloadStr1).join('');
        content = content.split(downloadStr2).join('');
        
        // Self-closing tag variation if any
        const downloadStr3 = '<a href="#" className="download-app-btn">download app <i className="fa-brands fa-google-play" /></a>';
        content = content.split(downloadStr3).join('');

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Processed: ${filePath}`);
    }
});
