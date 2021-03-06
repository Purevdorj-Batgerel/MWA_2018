const fs = require('fs');

const largeFileReader = (filePath) => {
    const readableStream = fs.createReadStream(filePath);
    readableStream.on('data', (chunk) => {
        process.send(chunk.toString());
    });

    readableStream.on('end', () => {
        process.send(null);
    });
}

process.on('message', (filePath) => {
    largeFileReader(filePath);
});