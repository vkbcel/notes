(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{377:function(e,t,o){"use strict";o.r(t);var r=o(25),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[o("a",{attrs:{href:"https://www.infoq.cn/article/VNe0A9yKszPCmp32akCa",target:"_blank",rel:"noopener noreferrer"}},[e._v("《Presto 源码分析：Coordinator 篇》"),o("OutboundLink")],1)]),e._v(" "),o("p",[o("a",{attrs:{href:"http://wp.wjcodes.com/archives/180",target:"_blank",rel:"noopener noreferrer"}},[e._v("《Presto技术内幕》(5)"),o("OutboundLink")],1)]),e._v(" "),o("p",[o("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/58959725",target:"_blank",rel:"noopener noreferrer"}},[e._v("《# Presto 是如何 schedule task 的?》"),o("OutboundLink")],1)]),e._v(" "),o("p",[o("img",{attrs:{src:"/bigdata/04_first.png",alt:""}})]),e._v(" "),o("p",[e._v("task大体可以分为四种")]),e._v(" "),o("ul",[o("li",[e._v("Coordinator_Only Task:\n遇到DDL或DML语句时，直接在Coordinator上对元数据进行修改，直接在Coordinator上运行一个Task而不再随机选择节点。")]),e._v(" "),o("li",[e._v("Single Task:\n一般是将上游Stage的数据汇聚到一个Worker上汇总运算，如全局排序。随机选择一个节点")]),e._v(" "),o("li",[e._v("Fixed Task:\n一般用于JOIN之类的聚合操作。随机选择hash_partition_count(可配置)个节点。")])]),e._v(" "),o("p",[e._v("以上三种task节点选择在"),o("code",[e._v("SystemPartitioningHandle.java")]),e._v("中实现\n"),o("img",{attrs:{src:"/bigdata/04_second.png",alt:""}})]),e._v(" "),o("ul",[o("li",[e._v("Source Task:\n对于Source Task，会在DistributedExecutionPlanner中从连接器的"),o("code",[e._v("ConnectorSplitManager")]),e._v("."),o("code",[e._v("getSplits")]),e._v("方法拿到分片。例如：对tpch连接器进行查询，拿到的分片数量为节点数量*6(可配置)。对mysql连接器进行查询，拿到的分片数量为1，无法并行获取数据。")])]),e._v(" "),o("p",[e._v("tpch连接器的"),o("code",[e._v("getSplits")]),e._v("方法如：\n"),o("img",{attrs:{src:"/bigdata/04_third.png",alt:""}}),e._v("\n拿到分片详情后对于每个分片调用"),o("code",[e._v("nodeSelector")]),e._v("."),o("code",[e._v("computeAssignments")]),e._v("指派一个节点，规则：对于支持远程获取的连接器随机选取10(可配置)个节点，从中选择负载最小的节点进行指派。")]),e._v(" "),o("p",[e._v("支持远程获取：外部连接器如：mysql, hive等\n不支持远程获取：内部特殊用途连接器：memory, tpch, jmx等")]),e._v(" "),o("p",[e._v("综上，所有对于节点的选择都实现在nodeSelector中，从所有活跃节点中随机选择，具体实现有两个"),o("code",[e._v("SimpleNodeSelector")]),e._v("和"),o("code",[e._v("TopologyAwareNodeSelector")]),e._v("。后者提供就近选择的能力。")]),e._v(" "),o("p",[e._v("对"),o("code",[e._v("createNodeSelector")]),e._v("方法进行改造，实现根据请求session控制可选择节点范围。")])])}),[],!1,null,null,null);t.default=n.exports}}]);