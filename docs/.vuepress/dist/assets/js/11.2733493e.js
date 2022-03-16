(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{373:function(a,s,t){"use strict";t.r(s);var e=t(25),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h3",{attrs:{id:"hadoop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hadoop"}},[a._v("#")]),a._v(" hadoop")]),a._v(" "),t("ol",[t("li",[a._v("下载 hadoop3.3.1")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://mirrors.bfsu.edu.cn/apache/hadoop/common/hadoop-3.3.1/hadoop-3.3.1.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -xvf hadoop-3.3.1.tar.gz -C /data/hivespine/\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /data/hivespine/hadoop-3.3.1\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[t("code",[a._v("etc/hadoop/hadoop-env.sh")]),a._v(" 文件中添加")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/lib/jvm/java-1.8.0\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[t("code",[a._v("etc/hadoop/hdfs-site.xml")]),a._v(" 文件中添加")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("configuration"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("-- 关闭鉴权 --"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("property"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("dfs.permissions.enabled"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("false"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/value"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/property"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\t   "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("property"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("dfs.client.use.datanode.hostname"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("true"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/value"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/property"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/configuration"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[t("code",[a._v("etc/hadoop/core-site.xml")]),a._v("文件中添加")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("configuration"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("-- 指定hdfs的nameservice的地址为ip,端口为9000 --"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("property"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("fs.defaultFS"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("hdfs://10.2.174.241:900"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("0")]),a._v("<")]),a._v("/value"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/property"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("-- 指定hadoop存储数据的目录 --"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("property"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("hadoop.tmp.dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/data/hivespine/hadooptmp"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/value"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/property"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("property"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("fs.oss.buffer.dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/data/hivespine/hadoopbuffer"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/value"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/property"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/configuration"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("ol",{attrs:{start:"5"}},[t("li",[a._v("配置免密登录")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("ssh-keygen\n\nssh-copy-id localhost\n")])])]),t("ol",{attrs:{start:"6"}},[t("li",[a._v("启动 hdfs")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 初始化hdfs文件系统")]),a._v("\n./bin/hdfs namenode -format\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启动")]),a._v("\n./sbin/start-dfs.sh\n")])])]),t("h3",{attrs:{id:"hive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hive"}},[a._v("#")]),a._v(" hive")]),a._v(" "),t("ol",[t("li",[a._v("下载 hive3.1.2")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://mirrors.bfsu.edu.cn/apache/hive/hive-3.1.2/apache-hive-3.1.2-bin.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -xvf apache-hive-3.1.2-bin.tar.gz -C /data/hivespine/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" /data/hivespine/apache-hive-3.1.2-bin /data/hivespine/hive-3.1.2\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /data/hivespine/hive-3.1.2\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" conf/hive-env.sh.template conf/hive-env.sh\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("touch")]),a._v(" conf/hive-site.xml\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[t("code",[a._v("hive-env.sh")]),a._v(" 文件中添加")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("HADOOP_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/data/hivespine/hadoop-3.3.1\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("HIVE_CONF_DIR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/data/hivespine/hive-3.1.2/conf\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("HIVE_AUX_JARS_PATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/data/hivespine/hive-3.1.2/lib\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[t("code",[a._v("hive-site.xml")]),a._v("文件中添加")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("configuration"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("property"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("fs.defaultFS"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("alluxio://10.2.174.241:1999"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("8")]),a._v("<")]),a._v("/value"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/property"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("property"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("javax.jdo.option.ConnectionUserName"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("root"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/value"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/property"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("property"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("javax.jdo.option.ConnectionPassword"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("root"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/value"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/property"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("property"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("javax.jdo.option.ConnectionURL"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("jdbc:mysql://localhost:3306/hivespine?useUnicode"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("characterEncoding")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("utf-8"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("useSSL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("false"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/value"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/property"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("property"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("javax.jdo.option.ConnectionDriverName"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("com.mysql.jdbc.Driver"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/value"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/property"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("property"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("hive.metastore.warehouse.dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/hivespine/warehouse"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/value"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/property"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("property"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("-- https://community.hortonworks.com/content/supportkb/247055/errorjavalangunsupportedoperationexception-storage.html --"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("metastore.storage.schema.reader.impl"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("org.apache.hadoop.hive.metastore.SerDeStorageSchemaReader"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/value"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/property"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/configuration"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[a._v("兼容问题处理")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装mysql连接库")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://repo1.maven.org/maven2/mysql/mysql-connector-java/5.1.49/mysql-connector-java-5.1.49.jar\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" mysql-connector-java-5.1.49.jar /data/hivespine/hive-3.1.2/lib/\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 处理guava兼容问题")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" /data/hivespine/hadoop-3.3.1/share/hadoop/common/lib/guava-27.0-jre.jar /data/hivespine/hive-3.1.2/lib/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" /data/hivespine/hive-3.1.2/lib/guava-19.0.jar\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装alluxio连接库")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" /data/alluxio-2.6.0/client/alluxio-2.6.0-client.jar /data/hivespine/hive-3.1.2/lib/\n")])])]),t("ol",{attrs:{start:"5"}},[t("li",[a._v("初始化元数据")])]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 在mysql中创建数据库hivespine")]),a._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("create")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("database")]),a._v(" hivespine "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("default")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("charset")]),a._v(" utf8 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("collate")]),a._v(" utf8_general_ci"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# alluxio中创建工作目录")]),a._v("\n/data/alluxio-2.6.0/bin/alluxio fs "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" /hivespine/warehouse\n")])])]),t("ol",{attrs:{start:"6"}},[t("li",[a._v("启动hive")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 初始化")]),a._v("\n./bin/schematool -initSchema -dbType mysql\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启动")]),a._v("\n./bin/hive\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 只启动metastore供hetu连接")]),a._v("\n./bin/hive --service metastore -p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("9083")]),a._v("\n")])])]),t("h3",{attrs:{id:"检查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查"}},[a._v("#")]),a._v(" 检查")]),a._v(" "),t("p",[a._v("查看"),t("code",[a._v("9000端口(hadoop)")]),a._v("和"),t("code",[a._v("9083端口(hive)")]),a._v("是否正常监听")])])}),[],!1,null,null,null);s.default=r.exports}}]);