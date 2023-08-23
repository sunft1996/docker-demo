const http = require('http');
const port = 8080;

// 创建 HTTP 服务器对象
const server = http.createServer((req, res) => {
  // 设置响应头
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // 处理 API 请求
  if (req.url === '/api/greeting' && req.method === 'GET') {
    res.end('Hello, world!\n');
  } else {
    res.end('API not found.\n');
  }
});

// 监听指定端口号并启动服务器
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

