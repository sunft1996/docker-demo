# 使用官方 Node.js 16 镜像作为基础镜像
FROM node:16

# 在容器内部创建工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 到工作目录
COPY package*.json ./

# 安装依赖项
RUN npm install

# 复制当前目录所有文件到工作目录中
COPY . .

# 暴露容器对外的端口号
EXPOSE 8080

# 在容器启动时运行 node 命令启动应用程序
CMD [ "node", "index.js" ]

