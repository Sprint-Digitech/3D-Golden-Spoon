import fs from 'fs';
const path = './src/pages';
fs.readdirSync(path).forEach(f => {
    let c = fs.readFileSync(`${path}/${f}`, 'utf8');
    c = c.replace(/<Link([^>]*?)>(.*?)<\/a>/g, '<Link$1>$2</Link>');
    // Also fix self-closing <Link ... /> that were originally <a ...></a> if any empty ones
    c = c.replace(/<Link([^>]*?)><\/a>/g, '<Link$1></Link>');
    
    // Check if there are any remaining </a> tags that were replaced improperly
    c = c.replace(/<Link([\s\S]*?)<\/a>/g, '<Link$1</Link>');
    
    fs.writeFileSync(`${path}/${f}`, c);
    console.log(`Fixed ${f}`);
});
