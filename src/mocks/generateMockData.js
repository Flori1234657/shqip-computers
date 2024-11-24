import fs from 'fs'; // To write files
import crypto from 'crypto'; // To generate unique ids

// Function to generate a random unique ID
function generateUniqueId() {
    return crypto.randomBytes(8).toString('hex'); // Generates an 8-byte unique hex string
}

// Generate the array of 1000 objects with unique ids
const array = [];
for (let i = 0; i < 1000; i++) {
    array.push({ id: generateUniqueId() });
}

// Convert the array to the desired format
const content = `const array = ${JSON.stringify(array, null, 2)};`;

// Write the content to a file
fs.writeFile('mockData.js', content, (err) => {
    if (err) {
        console.error('Error writing to file', err);
    } else {
        console.log('File has been saved as mockData.js');
    }
});

// run teh file >>> node generateMockData.js
