import fs from 'fs';

const html = fs.readFileSync('d:/3DSpoonRestaurant/3DSpoonRestaurant/html.awaikenthemes.com/spicyhunt/index.html', 'utf8');

let jsx = html
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

console.log("Length after initial replaces:", jsx.length);
console.log("Includes intro-video before a tag replacement?", jsx.includes('intro-video'));

jsx = jsx.replace(/<a([^>]*?)href="([^"]*?\.html)"([^>]*?)>([\s\S]*?)<\/a>/g, (match, beforeHref, href, afterHref, innerContent) => {
    const to = href === 'index.html' ? '/' : '/' + href.replace('.html', '');
    return `<Link${beforeHref}to="${to}"${afterHref}>${innerContent}</Link>`;
});

console.log("Includes intro-video after a tag replacement?", jsx.includes('intro-video'));
console.log("Length after a tag replace:", jsx.length);
