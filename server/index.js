//MODULES
const http = require("http");
const fs = require("fs");

const PORT = 8080;

//USERSLIST DATA
const users = [
    { name: "Hasanul Banna" },
    { name: "Jinas" },
    { name: "Akshay" },
    { name: "Anshid" },
    { name: "Ameen" },
    { name: "Thabsheer" },
    { name: "Shamil" },
    { name: "Habeeb" },
    { name: "jabir" },
    { name: "Ramees" },
    { name: "Faseen" },
    { name: "Shijah" },
];

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    switch (req.url) {
        case "/":
            //REAADING HTML FILE
            fs.readFile("index.html", (err, data) => {
                if (err) throw err;
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });
            break;

        case "/users":
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end(JSON.stringify(users));
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
