const fs = require('fs');
const path = require('path');

const videoFileMap = {
    'video1': path.join(__dirname, '../videos/video1.mp4'),
    'video2': path.join(__dirname, '../videos/video2.mp4'),
    'video3': path.join(__dirname, '../videos/video3.mp4'),
};

exports.streamVideo = (req, res) => {
    const filename = req.params.filename;
    const filePath = videoFileMap[filename];

    if (!filePath) {
        return res.status(404).send('File Not Found');
    }

    const stat = fs.statSync(filePath);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (range) {
        const parts = range.replace(/bytes=/, '').split('-');
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

        const chunksize = end - start + 1;
        const file = fs.createReadStream(filePath, { start, end });
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4'
        };
        res.writeHead(206, head);
        file.pipe(res);
    } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4'
        };
        res.writeHead(200, head);
        fs.createReadStream(filePath).pipe(res);
    }
};
