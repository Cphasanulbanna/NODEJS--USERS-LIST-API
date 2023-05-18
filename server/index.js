//MODULES

const http = require("http");

const PORT = 8080;

const server = http.createServer((req, res) => {
    console.log("entered");
    switch (req.url) {
        case "/":
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("<h1>hello</h1>");
            res.end();
            break;
        case "/":
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("<h1>hello</h1>");
            res.end();
            break;

        default:
            "/";
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("<h1>hello</h1>");
            res.end();
            break;
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
