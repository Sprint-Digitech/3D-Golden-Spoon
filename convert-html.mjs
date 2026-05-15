import fs from 'fs';
import path from 'path';

const srcDir = 'd:/3DSpoonRestaurant/3DSpoonRestaurant/html.awaikenthemes.com/spicyhunt';
const destDir = 'd:/3DSpoonRestaurant/spicyhunt-react/src/pages';

function convertHtmlToJsx(htmlContent, filename) {
    let jsx = htmlContent
        .replace(/class=/g, 'className=')
        .replace(/for=/g, 'htmlFor=')
        .replace(/<!--[\s\S]*?-->/g, '')
        // Fix breadcrumbs and absolute links
        .replace(/https:\/\/html\.awaikenthemes\.com\/spicyhunt\//gi, '/')
        // Fix asset paths
        .replace(/(src|href)="images\//g, '$1="/images/')
        // Fix autoplay and muted for React
        .replace(/autoplay/g, 'autoPlay')
        .replace(/muted/g, 'muted={true}')
        .replace(/loop/g, 'loop={true}')
        .replace(/playsinline/g, 'playsInline')
        // Fix selected on options
        .replace(/<option([^>]*?)selected([^>]*?)>(.*?)<\/option>/g, '<option$1defaultValue$2>$3</option>')
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

    // Convert inline style strings to React style objects
    jsx = jsx.replace(/style="([^"]*)"/g, (match, styleString) => {
        try {
            const styleObj = styleString.split(';').filter(s => s.trim()).reduce((acc, style) => {
                const parts = style.split(':');
                if (parts.length >= 2) {
                    const key = parts[0].trim();
                    const value = parts.slice(1).join(':').trim();
                    const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
                    acc[camelKey] = value;
                }
                return acc;
            }, {});
            return `style={${JSON.stringify(styleObj)}}`;
        } catch (e) {
            return match; // fallback if parsing fails
        }
    });

    let mainContent = jsx;
    const headerEndMatch = jsx.match(/<\/header>/);
    const footerStartMatch = jsx.match(/<footer className="main-footer">/);
    
    if (headerEndMatch && footerStartMatch) {
        mainContent = jsx.substring(headerEndMatch.index + '</header>'.length, footerStartMatch.index);
    }

    const componentName = filename.replace('.html', '').split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
    let finalName = componentName === 'Index' ? 'Home' : componentName;
    if (/^\d/.test(finalName)) {
        finalName = 'Page' + finalName;
    }

    const componentCode = `
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ${finalName} = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            ${mainContent}
        </main>
    );
};

export default ${finalName};
`;

    // Convert local links to React Router Link components
    return componentCode.replace(/<a([^>]*?)href="([^"]*?\.html)"([^>]*?)>([\s\S]*?)<\/a>/g, (match, beforeHref, href, afterHref, innerContent) => {
        const to = href === 'index.html' ? '/' : '/' + href.replace('.html', '');
        return `<Link${beforeHref}to="${to}"${afterHref}>${innerContent}</Link>`;
    });
}

const filesToConvert = fs.readdirSync(srcDir).filter(f => f.endsWith('.html'));

filesToConvert.forEach(file => {
    const filePath = path.join(srcDir, file);
    if (fs.existsSync(filePath)) {
        const html = fs.readFileSync(filePath, 'utf8');
        let jsxCode = convertHtmlToJsx(html, file);
        
        let componentName = file === 'index.html' ? 'Home' : file.replace('.html', '').split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
        if (/^\d/.test(componentName)) {
            componentName = 'Page' + componentName;
        }
        const outName = componentName + '.jsx';
        fs.writeFileSync(path.join(destDir, outName), jsxCode);
        console.log('Converted ' + file + ' to ' + outName);
    }
});
