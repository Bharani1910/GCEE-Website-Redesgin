
const https = require('https');
const fs = require('fs');
const path = require('path');

const faculty = [
    { dept: 'cse', role: 'associate_professor', count: 3 },
    { dept: 'cse', role: 'assistant_professor', count: 9 },
    { dept: 'mech', role: 'associate_professor', count: 5 },
    { dept: 'mech', role: 'assistant_professor', count: 5 },
    { dept: 'eee', role: 'associate_professor', count: 3 },
    { dept: 'eee', role: 'assistant_professor', count: 5 },
    { dept: 'it', role: 'assistant_professor', count: 12 },
    { dept: 'civil', role: 'assistant_professor', count: 4 },
    { dept: 'ece', role: 'associate_professor', count: 1 },
    { dept: 'ece', role: 'assistant_professor', count: 7 }
];

async function download(url, dest) {
    return new Promise((resolve) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    resolve(true);
                });
            } else {
                file.close();
                fs.unlink(dest, () => { }); // Delete empty file
                resolve(false);
            }
        }).on('error', (err) => {
            fs.unlink(dest, () => { });
            resolve(false);
        });
    });
}

(async () => {
    const dir = path.join(__dirname, '..', 'public', 'images', 'faculty');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    for (const f of faculty) {
        for (let i = 1; i <= f.count; i++) {
            const url = `https://www.gcee.ac.in/include/ajax/${f.dept}/${f.role}${i}.jpeg`;
            const dest = path.join(dir, `${f.dept}-${f.role}${i}.jpeg`);
            const success = await download(url, dest);
            if (success) console.log(`Downloaded ${f.dept}-${f.role}${i}.jpeg`);
        }
    }
})();
