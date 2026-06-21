// Let's use standard 'https' module.
const https = require('https');

function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', (err) => reject(err));
    });
}

(async () => {
    const departments = [
        { name: "Civil Engineering", slug: "civil", url: "https://www.gcee.ac.in/civil.php" },
        { name: "Mechanical Engineering", slug: "mech", url: "https://www.gcee.ac.in/mech.php" },
        { name: "Electrical and Electronics Engineering", slug: "eee", url: "https://www.gcee.ac.in/eee.php" },
        { name: "Electronics and Communication Engineering", slug: "ece", url: "https://www.gcee.ac.in/ece.php" },
        { name: "Computer Science and Engineering", slug: "cse", url: "https://www.gcee.ac.in/cse.php" },
        { name: "Information Technology", slug: "it", url: "https://www.gcee.ac.in/it.php" },
        { name: "Automobile Engineering", slug: "automobile", url: "https://www.gcee.ac.in/automobile.php" },
        { name: "Science and Humanities", slug: "science&humanities", url: "https://www.gcee.ac.in/science&humanities.php" }
    ];

    for (const dept of departments) {
        console.log(`--- Fetching ${dept.name} ---`);
        const html = await fetchUrl(dept.url);
        // Find HOD section
        const hodMatch = html.match(/HEAD OF THE DEPARTMENT<\/h2>[\s\S]*?<h3>(.*?)<\/h3>[\s\S]*?<h4>(.*?)<\/h4>/i);
        // This is a guess of the structure. I should look at the HTML structure from previous view_content_chunk.
        // Actually, the structure in view_content_chunk showed:
        // ## HEAD OF THE DEPARTMENT
        // Dr.A.Kavitha
        // Qualification: M.E.,Ph.D

        // I'll try to match name after HEAD OF THE DEPARTMENT
        const hodRegex = /HEAD OF THE DEPARTMENT(?:[\s\S]*?)(?:<br\s*\/?>)?\s*([Dr|Mr|Mrs|Prof][^<|\n]+)/i;
        const hod = html.match(hodRegex);
        if (hod) console.log(`HOD: ${hod[1].trim()}`);

        // Find images
        const images = [...html.matchAll(/img src="(.*?)"/gi)];
        images.forEach(img => {
            if (img[1].includes('professor&hod.jpeg') || img[1].includes('faculty')) {
                console.log(`Image: ${img[1]}`);
            }
        });
    }
})();
