---
title: trino指派机制
---


[《Presto 源码分析：Coordinator 篇》](https://www.infoq.cn/article/VNe0A9yKszPCmp32akCa)

[《Presto技术内幕》(5)](http://wp.wjcodes.com/archives/180)

[《# Presto 是如何 schedule task 的?》](https://zhuanlan.zhihu.com/p/58959725)


![](/bigdata/04_first.png)

task大体可以分为四种
- Coordinator_Only Task:
遇到DDL或DML语句时，直接在Coordinator上对元数据进行修改，直接在Coordinator上运行一个Task而不再随机选择节点。
- Single Task:
一般是将上游Stage的数据汇聚到一个Worker上汇总运算，如全局排序。随机选择一个节点
- Fixed Task:
一般用于JOIN之类的聚合操作。随机选择hash_partition_count(可配置)个节点。

以上三种task节点选择在`SystemPartitioningHandle.java`中实现
![](/bigdata/04_second.png)
- Source Task:
对于Source Task，会在DistributedExecutionPlanner中从连接器的`ConnectorSplitManager`.`getSplits`方法拿到分片。例如：对tpch连接器进行查询，拿到的分片数量为节点数量*6(可配置)。对mysql连接器进行查询，拿到的分片数量为1，无法并行获取数据。

tpch连接器的`getSplits`方法如：
![](/bigdata/04_third.png)
拿到分片详情后对于每个分片调用`nodeSelector`.`computeAssignments`指派一个节点，规则：对于支持远程获取的连接器随机选取10(可配置)个节点，从中选择负载最小的节点进行指派。

支持远程获取：外部连接器如：mysql, hive等
不支持远程获取：内部特殊用途连接器：memory, tpch, jmx等

综上，所有对于节点的选择都实现在nodeSelector中，从所有活跃节点中随机选择，具体实现有两个`SimpleNodeSelector`和`TopologyAwareNodeSelector`。后者提供就近选择的能力。

对`createNodeSelector`方法进行改造，实现根据请求session控制可选择节点范围。