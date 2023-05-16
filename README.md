# Streamer - A Video Streaming App

This is a simple video streaming app that allows you to stream videos from a server using chunked streaming. It is built using Node.js, Express on the server-side and JavaScript on the client-side.

## Features

- Stream videos in small chunks for efficient loading and playback.
- Support for seeking to different parts of the video.
- Automatic loading of the next chunk for smooth streaming.

## Prerequisites

- Node.js: Make sure you have Node.js installed on your machine.

## Getting Started

1. Clone the repository:

   ```shell
   git clone https://github.com/sranmanpreet/streamer.git

2. Install Dependencies

    ```shell
    cd streamer
    npm install

3. Start the server:

   ```shell
   npm start

4. Deploy the UI:

   ```shell
   http-server -p 4200

5. You should see the video streaming app in action.


## Configuration

You can customize the app by modifying the server.js file. Here are some configurable options:

- PORT: The port on which the server will listen (default: 3000).
- VIDEO_DIRECTORY: The directory where your video files are stored (default: videos).
- CHUNK_SIZE: The size of each video chunk in bytes (default: 1MB).

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.

## Acknowledgements
Node.js,
Express,
HTML5 Video Element,
Tailwind
