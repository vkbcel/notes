---
title: Set(集合)
---

* 设置
    * `SADD`&emsp;&emsp;&emsp;&emsp;&ensp;将一个或多个 member 元素加入到集合 key 当中
    * `SMOVE`&emsp;&emsp;&emsp;&emsp;将 member 元素从 source 集合移动到 destination 集合
* 获取
    * `SCARD`&emsp;&emsp;&emsp;&emsp;返回集合 key 中元素的数量
    * `SRANDMEMBER`&emsp;返回集合中的 count 个随机元素
    * `SISMEMBER`&emsp;&emsp;判断 member 元素是否集合 key 的成员
    * `SMEMBERS`&emsp;&emsp;&ensp;返回集合 key 中的所有成员
    * `SDIFF`&emsp;&emsp;&emsp;&emsp;返回所有给定集合之间的差集
    * `SDIFFSTORE`&emsp;&ensp;将所有给定集合之间的差集保存到 destination 集合
    * `SINTER`&emsp;&emsp;&emsp;&ensp;返回所有给定集合之间的交集
    * `SINTERSTORE`&emsp;将所有给定集合之间的交集保存到 destination 集合
    * `SUNION`&emsp;&emsp;&emsp;&ensp;返回所有给定集合的并集
    * `SUNIONSTORE`&emsp;将所有给定集合之间的并集保存到 destination 集合
    * `SSCAN`&emsp;&emsp;&emsp;&emsp;增量迭代
* 删除
    * `SREM`&emsp;&emsp;&emsp;&emsp;&ensp;移除集合 key 中的一个或多个 member 元素
    * `SPOP`&emsp;&emsp;&emsp;&emsp;&ensp;移除并返回集合中的一个随机元素
* 6.2.0
    * `SMISMEMBER`&emsp;&ensp;判断多个 member 元素是否集合 key 的成员

|  命令 | 说明 |
|  ----  | ---- |
| [SADD](http://doc.redisfans.com/set/sadd.html) | `SADD key member [member ...]`<br>将一个或多个 member 元素加入到集合 key 当中，已经存在于集合的 member 元素将被忽略 |
| [SCARD](http://doc.redisfans.com/set/scard.html) | `SCARD key`<br> |返回集合 key 中元素的数量
| [SDIFF](http://doc.redisfans.com/set/sdiff.html) | `SDIFF key [key ...]`<br>返回所有给定集合之间的差集 |
| [SDIFFSTORE](http://doc.redisfans.com/set/sdiffstore.html) | `SDIFFSTORE destination key [key ...]`<br>将所有给定集合之间的差集保存到 destination 集合 |
| [SINTER](http://doc.redisfans.com/set/sinter.html) | `SINTER key [key ...]`<br>返回所有给定集合之间的交集 |
| [SINTERSTORE](http://doc.redisfans.com/set/sinterstore.html) | `SINTERSTORE destination key [key ...]`<br>将所有给定集合之间的交集保存到 destination 集合 |
| [SISMEMBER](http://doc.redisfans.com/set/sismember.html) | `SISMEMBER key member`<br>判断 member 元素是否集合 key 的成员 |
| [SMEMBERS](http://doc.redisfans.com/set/smembers.html) | `SMEMBERS key`<br>返回集合 key 中的所有成员 |
| [SMISMEMBER](https://redis.io/commands/smismember)`6.2.0` | `SMISMEMBER key member [member ...]`<br>判断多个 member 元素是否集合 key 的成员|
| [SMOVE](http://doc.redisfans.com/set/smove.html) | `SMOVE source destination member`<br>将 member 元素从 source 集合移动到 destination 集合 |
| [SPOP](http://doc.redisfans.com/set/spop.html) | `SPOP key`<br>移除并返回集合中的一个随机元素 |
| [SRANDMEMBER](http://doc.redisfans.com/set/srandmember.html) | `SRANDMEMBER key [count]`<br>返回集合中的 count 个随机元素 |
| [SREM](http://doc.redisfans.com/set/srem.html) | `SREM key member [member ...]`<br>移除集合 key 中的一个或多个 member 元素，不存在的 member 元素会被忽略 |
| [SSCAN](http://doc.redisfans.com/set/sscan.html) | `SSCAN key cursor [MATCH pattern] [COUNT count]`<br>增量迭代 |
| [SUNION](http://doc.redisfans.com/set/sunion.html) | `SUNION key [key ...]`<br>返回所有给定集合的并集 |
| [SUNIONSTORE](http://doc.redisfans.com/set/sunionstore.html) | `SUNIONSTORE destination key [key ...]`<br>将所有给定集合之间的并集保存到 destination 集合 |
