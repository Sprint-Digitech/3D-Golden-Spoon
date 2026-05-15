import fs from 'fs';
import path from 'path';

const srcDir = 'd:/3DSpoonRestaurant/3DSpoonRestaurant/html.awaikenthemes.com/spicyhunt';
const destDir = 'd:/3DSpoonRestaurant/spicyhunt-react/src/pages';

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

function convertHtmlToJsx(htmlContent, filename) {
    let jsx = htmlContent
        .replace(/class=/g, 'className=')
        .replace(/for=/g, 'htmlFor=')
        .replace(/<!--[\s\S]*?-->/g, '')
        .replace(/<img(.*?)>/g, (match) => {
            if (match.endsWith('/>')) return match;
            return match.replace(/>$/, ' />');
        })
        .replace(/<input(.*?)>/g, (match) => {
            if (match.endsWith('/>')) return match;
            return match.replace(/>$/, ' />');
        })
        .replace(/<hr>/g, '<hr />')
        .replace(/<br>/g, '<br />')
        .replace(/<source(.*?)>/g, (match) => {
            if (match.endsWith('/>')) return match;
            return match.replace(/>$/, ' />');
        });

    let mainContent = jsx;
    const headerEndMatch = jsx.match(/<\/header>/);
    const footerStartMatch = jsx.match(/<footer className="main-footer">/);
    
    if (headerEndMatch && footerStartMatch) {
        mainContent = jsx.substring(headerEndMatch.index + '</header>'.length, footerStartMatch.index);
    }

    const componentName = filename.replace('.html', '').split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
    const finalName = componentName === 'Index' ? 'Home' : componentName;

    const componentCode = `
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ${finalName} = () => {
    return (
        <main>
            ${mainContent}
        </main>
    );
};

export default ${finalName};
`;

    return componentCode.replace(/<a(.*?)href="(.*?)\.html"(.*?)>/g, '<Link$1to="/$2"$3>').replace(/to="\/index"/g, 'to="/"');
}

const filesToConvert = ['index.html', 'about.html', 'menu.html'];

filesToConvert.forEach(file => {
    const filePath = path.join(srcDir, file);
    if (fs.existsSync(filePath)) {
        const html = fs.readFileSync(filePath, 'utf8');
        let jsxCode = convertHtmlToJsx(html, file);
        // Fix inline styles in React
        jsxCode = jsxCode.replace(/style="([^"]*)"/g, ""); // strip styles to avoid react compilation errors for now (template mostly relies on classes)
        
        const outName = file === 'index.html' ? 'Home.jsx' : file.charAt(0).toUpperCase() + file.slice(1).replace('.html', '.jsx');
        fs.writeFileSync(path.join(destDir, outName), jsxCode);
        console.log('Converted ' + file + ' to ' + outName);
    }
});
