//MODULES
const http = require("http");
const fs = require("fs");

const PORT = 8080;

//USERSLIST DATA
const users = [
    "Hasanul Banna",
    "Jinas",
    "Akshay",
    "Anshid",
    "Ameen",
    "Thabsheer",
    "Shamil",
    "Habeeb",
    "jabir",
    "Ramees",
    "Faseen",
    "Shijah",
];

const server = http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            //REAADING HTML FILE
            fs.readFile("index.html", (err, data) => {
                if (err) throw err;
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(data);
                res.end();
            });
            break;

        case "/users":
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.write(JSON.stringify(users));
            res.end();
            break;

        default:
            "/";
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("<h1>404 PAGE NOT FOUND</h1>");
            res.end();
            break;
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
