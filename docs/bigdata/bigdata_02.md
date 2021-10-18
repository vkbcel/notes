---
title: hive安装
---

### hadoop
1. 下载 hadoop3.3.1
``` shell
wget https://mirrors.bfsu.edu.cn/apache/hadoop/common/hadoop-3.3.1/hadoop-3.3.1.tar.gz
tar -xvf hadoop-3.3.1.tar.gz -C /data/hivespine/
cd /data/hivespine/hadoop-3.3.1
```
2. `etc/hadoop/hadoop-env.sh` 文件中添加
``` shell
export JAVA_HOME=/usr/lib/jvm/java-1.8.0
```
3. `etc/hadoop/hdfs-site.xml` 文件中添加
``` shell
<configuration>
    <!-- 关闭鉴权 -->
    <property>
        <name>dfs.permissions.enabled</name>
        <value>false</value>
    </property>
	   <property>
        <name>dfs.client.use.datanode.hostname</name>
        <value>true</value>
    </property>
</configuration>
```
4. `etc/hadoop/core-site.xml`文件中添加
``` shell
<configuration>
    <!-- 指定hdfs的nameservice的地址为ip,端口为9000 -->
    <property>
        <name>fs.defaultFS</name>
        <value>hdfs://10.2.174.241:9000</value>
    </property>
    <!-- 指定hadoop存储数据的目录 -->
    <property>
        <name>hadoop.tmp.dir</name>
        <value>/data/hivespine/hadooptmp</value>
    </property>
    <property>
      <name>fs.oss.buffer.dir</name>
      <value>/data/hivespine/hadoopbuffer</value>
    </property>
</configuration>
```
5. 配置免密登录
``` shell
ssh-keygen

ssh-copy-id localhost
```
6. 启动 hdfs
``` shell
# 初始化hdfs文件系统
./bin/hdfs namenode -format
# 启动
./sbin/start-dfs.sh
```

### hive
1. 下载 hive3.1.2
``` shell
wget https://mirrors.bfsu.edu.cn/apache/hive/hive-3.1.2/apache-hive-3.1.2-bin.tar.gz
tar -xvf apache-hive-3.1.2-bin.tar.gz -C /data/hivespine/
mv /data/hivespine/apache-hive-3.1.2-bin /data/hivespine/hive-3.1.2

cd /data/hivespine/hive-3.1.2
cp conf/hive-env.sh.template conf/hive-env.sh
touch conf/hive-site.xml
```
2. `hive-env.sh` 文件中添加
``` shell
export HADOOP_HOME=/data/hivespine/hadoop-3.3.1
export HIVE_CONF_DIR=/data/hivespine/hive-3.1.2/conf
export HIVE_AUX_JARS_PATH=/data/hivespine/hive-3.1.2/lib
```
3. `hive-site.xml`文件中添加
``` shell
<configuration>
  <property>
    <name>fs.defaultFS</name>
    <value>alluxio://10.2.174.241:19998</value>
  </property>
  <property>
    <name>javax.jdo.option.ConnectionUserName</name>
    <value>root</value>
  </property>
  <property>
    <name>javax.jdo.option.ConnectionPassword</name>
    <value>root</value>
  </property>
  <property>
    <name>javax.jdo.option.ConnectionURL</name>
    <value>jdbc:mysql://localhost:3306/hivespine?useUnicode=true&characterEncoding=utf-8&useSSL=false</value>
  </property>
  <property>
    <name>javax.jdo.option.ConnectionDriverName</name>
    <value>com.mysql.jdbc.Driver</value>
  </property>
  <property>
    <name>hive.metastore.warehouse.dir</name>
    <value>/hivespine/warehouse</value>
  </property>
  <property>
    <!-- https://community.hortonworks.com/content/supportkb/247055/errorjavalangunsupportedoperationexception-storage.html -->
    <name>metastore.storage.schema.reader.impl</name>
    <value>org.apache.hadoop.hive.metastore.SerDeStorageSchemaReader</value>
</property>

</configuration>
```
4. 兼容问题处理
``` shell
# 安装mysql连接库
wget https://repo1.maven.org/maven2/mysql/mysql-connector-java/5.1.49/mysql-connector-java-5.1.49.jar
cp mysql-connector-java-5.1.49.jar /data/hivespine/hive-3.1.2/lib/
# 处理guava兼容问题
cp /data/hivespine/hadoop-3.3.1/share/hadoop/common/lib/guava-27.0-jre.jar /data/hivespine/hive-3.1.2/lib/
rm /data/hivespine/hive-3.1.2/lib/guava-19.0.jar
# 安装alluxio连接库
cp /data/alluxio-2.6.0/client/alluxio-2.6.0-client.jar /data/hivespine/hive-3.1.2/lib/
```
5. 初始化元数据
``` sql
# 在mysql中创建数据库hivespine
mysql> create database hivespine default charset utf8 collate utf8_general_ci;
```
``` shell
# alluxio中创建工作目录
/data/alluxio-2.6.0/bin/alluxio fs mkdir /hivespine/warehouse
```
6. 启动hive
``` shell
# 初始化
./bin/schematool -initSchema -dbType mysql

# 启动
./bin/hive

# 只启动metastore供hetu连接
./bin/hive --service metastore -p 9083
```

### 检查
查看`9000端口(hadoop)`和`9083端口(hive)`是否正常监听