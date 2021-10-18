---
title: flink安装
---

### 安装flink
1. 下载
``` shell
wget https://archive.apache.org/dist/flink/flink-1.12.2/flink-1.12.2-bin-scala_2.11.tgz
tar -xvf flink-1.12.2-bin-scala_2.11.tgz -C /data/
```

2. 添加依赖
``` shell
cd /data/flink-1.12.2/lib/
cp /data/alluxio-2.6.0/client/alluxio-2.6.0-client.jar ./
wget https://repo1.maven.org/maven2/com/alibaba/ververica/flink-connector-mysql-cdc/1.3.0/flink-connector-mysql-cdc-1.3.0.jar
wget https://repo.maven.apache.org/maven2/org/apache/hudi/hudi-flink-bundle_2.11/0.9.0/hudi-flink-bundle_2.11-0.9.0.jar
```

3. `/data/flink1.12.2/hadoopconf/core-site.xml` 文件中添加
``` shell
<configuration>
  <property>
    <name>fs.alluxio.impl</name>
    <value>alluxio.hadoop.FileSystem</value>
  </property>
</configuration>
```

4. `conf/flink-conf.yaml`文件中添加
``` shell
fs.hdfs.hadoopconf: /data/flink-1.12.2/hadoopconf
taskmanager.numberOfTaskSlots: 4
execution.checkpointing.interval: 10sec
state.backend: rocksdb
state.checkpoints.dir: alluxio://localhost:19998/flink-checkpoints
state.savepoints.dir: alluxio://localhost:19998/flink-savepoints
```
5. 启动
``` shell
export HADOOP_CLASSPATH=`/data/hivespine/hadoop-3.3.1/bin/hadoop classpath`
/data/flink-1.12.2/bin/start-cluster.sh
```

### 安装flink-sql-gateway
#### 代码
仓库：http://10.2.174.240/backend/flink-sql-gateway
分支：flink-1.12

#### 编译
``` shell
mvn clean package -DskipTests
mv target/flink-sql-gateway-0.3-SNAPSHOT-bin/flink-sql-gateway-0.3-SNAPSHOT /data/flink-sql-gateway
```

#### 配置
修改`conf/sql-gateway-defaults.yaml`文件
``` shell
server.bind-address: 0.0.0.0
server.address: 0.0.0.0
```
环境
``` shell
export FLINK_HOME=/data/flink-1.12.2/
export HADOOP_CLASSPATH=`/data/hivespine/hadoop-3.3.1/bin/hadoop classpath`
```

#### 启动
``` shell
nohup ./bin/sql-gateway.sh &
```

### 验证
确保 8081端口(flink)和8083端口(flink-sql-gateway)正常监听