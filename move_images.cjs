const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

const mapping = [
    { src: 'C:/Users/Mcc/.gemini/antigravity/brain/37e5ec36-22d2-4e4f-b6f0-c0e5b37457f7/media__1777654852839.jpg', dest: 'work1.jpg' },
    { src: 'C:/Users/Mcc/.gemini/antigravity/brain/bc894f52-cc17-4044-aff5-360d6290b3de/media__1777656782534.jpg', dest: 'work2.jpg' },
    { src: 'C:/Users/Mcc/.gemini/antigravity/brain/37e5ec36-22d2-4e4f-b6f0-c0e5b37457f7/access_restoration_1777648895738.png', dest: 'work3.png' },
    { src: 'C:/Users/Mcc/.gemini/antigravity/brain/37e5ec36-22d2-4e4f-b6f0-c0e5b37457f7/media__1777648636401.jpg', dest: 'work4.jpg' },
    { src: 'C:/Users/Mcc/.gemini/antigravity/brain/37e5ec36-22d2-4e4f-b6f0-c0e5b37457f7/media__1777648961490.png', dest: 'work5.png' },
    { src: 'C:/Users/Mcc/.gemini/antigravity/brain/37e5ec36-22d2-4e4f-b6f0-c0e5b37457f7/diverse_clientele_1777649067248.png', dest: 'work6.png' }
];

mapping.forEach(item => {
    try {
        if (fs.existsSync(item.src)) {
            fs.copyFileSync(item.src, path.join(targetDir, item.dest));
            console.log(`Successfully copied ${item.dest}`);
        } else {
            console.warn(`Source file not found: ${item.src}`);
        }
    } catch (err) {
        console.error(`Error copying ${item.dest}:`, err.message);
    }
});

console.log('\nAll done! You can now run the website.');
