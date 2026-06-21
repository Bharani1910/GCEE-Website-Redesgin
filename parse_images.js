const fs = require('fs');

const html = fs.readFileSync('irttmedia.html', 'utf-8');

// A simple regex to find all img tags and their surrounding context
// We'll look for chunks of HTML containing images.
const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
let match;
const results = [];

while ((match = imgRegex.exec(html)) !== null) {
    const src = match[1];
    
    // Skip common layout images if they appear
    if (src.includes('logo') || src.includes('icon') || src.includes('slider')) {
        continue;
    }

    // Capture ~150 characters before and after the img tag for context
    const startIndex = Math.max(0, match.index - 150);
    const endIndex = Math.min(html.length, match.index + match[0].length + 150);
    const context = html.slice(startIndex, endIndex).replace(/\s+/g, ' ');

    // Try to find a caption or alt text
    const altMatch = match[0].match(/alt=["']([^"']+)["']/i);
    const alt = altMatch ? altMatch[1] : '';

    results.push({
        url: src.startsWith('http') ? src : `https://www.gcee.ac.in/${src.replace(/^\//, '')}`,
        alt,
        context
    });
}

fs.writeFileSync('extracted_images.json', JSON.stringify(results, null, 2));
console.log(`Extracted ${results.length} images.`);
