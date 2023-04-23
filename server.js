const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(path.join(__dirname, "home.html"), (err, content) => {
      if (err) throw err;
      //   res.writeHead(200, { "Content-Type": text / html });
      console.log(content); //content is a buffer
      /* <Buffer 3c 21 44 4f 43 54 59 50 45 20 68 74 6d 6c 3e 0d 0a 3c 68 74 6d 6c 20 6c 61 6e 67 3d 22 65 6e 22 3e 0d 0a 20 20 3c 68 65 61 64 3e 0d 0a 20 20 20 20 3c ... 288 more bytes> */
      console.log(content.toString());
      /* 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <h1>Home</h1>
        <a href="/about">about me</a>
    </body>
    </html>
    */
      res.end(content);
    });
    return;
  }

  if (req.url === "/about") {
    fs.readFile(path.join(__dirname, "about.html"), (err, content) => {
      if (err) throw err;
      res.end(content);
    });

    return;
  }

  //暂时先这么返回一个字符串
  return res.end("['404', 'not found']");
});

server.listen(3000);
