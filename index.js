const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"}); // Set content type to HTML
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Node App Live</title>
            <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background: linear-gradient(to right, #4CAF50, #81C784);
                    font-family: 'Arial', sans-serif;
                    color: white;
                    text-align: center;
                }
                h1 {
                    font-size: 3rem;
                    margin-bottom: 1rem;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
                }
                p {
                    font-size: 1.5rem;
                    background: rgba(0, 0, 0, 0.2);
                    padding: 20px;
                    border-radius: 10px;
                }
                .emoji {
                    font-size: 2rem;
                    margin-left: 10px;
                }
            </style>
        </head>
        <body>
            <div>
                <h1>🎉 Congratulations! You are live now!</h1>
                <p>All your processes are working properly <span class="emoji">✅</span></p>
            </div>
        </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});


