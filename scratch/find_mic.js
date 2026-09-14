const fs = require('fs');

const servicesHtml = fs.readFileSync('services.html', 'utf8');
const urls = [...servicesHtml.matchAll(/src="([^"]+)"/g)].map(m => m[1]).filter(u => u.includes('images.unsplash.com'));
console.log('Services.html image URLs:');
urls.forEach(u => console.log(u));

console.log('\nScanning all HTML files for these URLs...');
const allFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

urls.forEach(url => {
  const base = url.split('?')[0];
  const matches = [];
  allFiles.forEach(f => {
    const c = fs.readFileSync(f, 'utf8');
    if (c.includes(base)) matches.push(f);
  });
  console.log(`URL ${base} found in: ${matches.join(', ')}`);
});
