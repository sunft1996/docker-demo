# 使用官方的 Golang 镜像作为基础镜像
FROM golang:latest

# 设置工作目录，在容器中创建 /app 目录并将其设置为工作目录
WORKDIR /app

# 将当前目录下的所有文件复制到容器的 /app 目录下
COPY . /app

RUN go env -w GO111MODULE=on
RUN go env -w GOPROXY=https://goproxy.cn,direct
# 运行命令，安装依赖项以及构建Go应用程序
RUN go mod tidy && \
    go build -o main .

# 告诉 Docker 在运行容器时应该监听的端口号
EXPOSE 8080

# 最后，运行我们的应用程序
CMD ["./main"]