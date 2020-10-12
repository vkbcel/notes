这是一个 VuePress 搭建的文档

www.pashanhu.xyz

### 推荐环境
- node: 12

### 开发
```
# 安装yarn
npm install -g yarn
# 安装依赖
yarn add
# 本地开发 启动项目
yarn docs:dev
```

浏览器访问 http://localhost:8080

### 发布
```
# 构建生产环境
yarn docs:build
# 生成的dist目录位置
./docs/.vuepress/dist/
```
