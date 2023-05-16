const express = require('express');
const fs = require('fs');
const app = express();

const PORT = 3000;
const VIDEO_DIRECTORY = "./server/video.mp4";
const CHUNK_SIZE = 1 * 1e6;

app.get('/videoplayer', (req, res) => {
	const range = req.headers.range
	const videoSize = fs.statSync(VIDEO_DIRECTORY).size
	const start = Number(range.replace(/\D/g, ""))
	const end = Math.min(start + CHUNK_SIZE, videoSize - 1)
	const contentLength = end - start + 1;
	const headers = {
		"Content-Range": `bytes ${start}-${end}/${videoSize}`,
		"Accept-Ranges": "bytes",
		"Content-Length": contentLength,
		"Content-Type": "video/mp4"
	}
	res.writeHead(206, headers)
	const stream = fs.createReadStream(VIDEO_DIRECTORY, {
		start,
		end
	})
	stream.pipe(res)
})
app.listen(PORT);
