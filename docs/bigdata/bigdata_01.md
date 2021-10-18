---
title: alluxio安装
---

1. 下载
``` shell
wget https://downloads.alluxio.io/downloads/files/2.6.0/alluxio-2.6.0-bin.tar.gz
tar -xvf alluxio-2.6.0-bin.tar.gz -C /data/

cd /data/alluxio-2.6.0
cp conf/alluxio-env.sh.template conf/alluxio-env.sh
cp conf/alluxio-site.properties.template conf/alluxio-site.properties
```
2. 将`JAVA_HOME`环境变量写入`alluxio-env.sh`文件
``` shell
export JAVA_HOME=/usr/lib/java/jdk1.8.0_291
```
3. `alluxio-site.properties`文件中添加
```
alluxio.security.authorization.permission.enabled=false
alluxio.user.metadata.cache.enabled=false
alluxio.user.file.metadata.sync.interval=0
alluxio.master.hostname=0.0.0.0
alluxio.worker.bind.host=<ip地址>
alluxio.master.mount.table.root.ufs=oss://<oss bucket>/<oss directory>/
fs.oss.accessKeyId=<aliyun access key id>
fs.oss.accessKeySecret=<aliyun access key secret>
fs.oss.endpoint=<aliyun endpoint>
```
**注意：** `alluxio.worker.bind.host`配置本机IP，hetu会使用该IP访问alluxio
4. 初始化
``` shell
# 挂载 RAMFS 文件系统
./bin/alluxio-mount.sh SudoMount
# 格式化
./bin/alluxio format
```
5. 启动
```
./bin/alluxio-start.sh local
```
服务会监听多个端口
RPC端口：19998
WEB UI端口：19999

**添加worker**
`alluxio-site.properties`文件中添加
```
alluxio.security.authorization.permission.enabled=false
alluxio.user.metadata.cache.enabled=false
alluxio.user.file.metadata.sync.interval=0
alluxio.master.hostname=<master ip>
alluxio.worker.bind.host=<ip地址>
alluxio.worker.ramdisk.size=2GB
alluxio.master.mount.table.root.ufs=oss://<oss bucket>/<oss directory>/
fs.oss.accessKeyId=<aliyun access key id>
fs.oss.accessKeySecret=<aliyun access key secret>
fs.oss.endpoint=<aliyun endpoint>
```

启动
```
./bin/alluxio-start.sh worker SudoMount
```

官方文档：
- 配置要求：https://docs.alluxio.io/os/user/stable/en/deploy/Requirements.html
- 单机安装：https://docs.alluxio.io/os/user/stable/en/deploy/Running-Alluxio-Locally.html
- 底层文件系统使用OSS：https://docs.alluxio.io/os/user/stable/cn/ufs/OSS.html