---
title: List(列表)
---

* 设置
    * `LPUSH`&emsp;&emsp;&emsp;&emsp;&ensp;将一个或多个值 value 插入到列表 key 的表头
    * `LPUSHX`&emsp;&emsp;&emsp;&emsp;将值 value 插入到列表 key 的表头，当且仅当 key 存在并且是一个列表
    * `RPUSH`&emsp;&emsp;&emsp;&emsp;&ensp;将一个或多个值 value 插入到列表 key 的表尾(最右边)
    * `RPUSHX`&emsp;&emsp;&emsp;&emsp;将值 value 插入到列表 key 的表尾，当且仅当 key 存在并且是一个列表
    * `LSET`&emsp;&emsp;&emsp;&emsp;&emsp;将列表 key 下标为 index 的元素的值设置为 value
    * `LINSERT`&emsp;&emsp;&emsp;&ensp;将值 value 插入到列表 key 当中，位于值 pivot 之前或之后
    * `RPOPLPUSH`&emsp;&emsp;&ensp;返回并移除列表 source 尾元素， 并把该元素插入到列表 destination 表头
    * `BRPOPLPUSH`&emsp;&emsp;RPOPLPUSH 的阻塞版本
* 获取
    * `LPOP`&emsp;&emsp;&emsp;&emsp;&emsp;移除并返回列表 key 的头元素
    * `BLPOP`&emsp;&emsp;&emsp;&emsp;&ensp;LPOP 的阻塞版本
    * `RPOP`&emsp;&emsp;&emsp;&emsp;&emsp;移除并返回列表 key 的尾元素
    * `BRPOP`&emsp;&emsp;&emsp;&emsp;&ensp;RPOP 的阻塞版本
    * `LINDEX`&emsp;&emsp;&emsp;&emsp;返回列表 key 中，下标为 index 的元素
    * `LLEN`&emsp;&emsp;&emsp;&emsp;&emsp;返回列表 key 的长度
    * `LRANGE`&emsp;&emsp;&emsp;&emsp;返回列表 key 里指定范围内的元素
* 删除
    * `LREM`&emsp;&emsp;&emsp;&emsp;&emsp;根据参数 count 的值，移除列表中与参数 value 相等的元素
    * `LTRIM`&emsp;&emsp;&emsp;&emsp;&ensp;对一个列表进行修剪
* 6.0.0
    * `LMOVE`&emsp;&emsp;&emsp;&emsp;&ensp;返回并移除列表 source 头/尾元素， 并把该元素放入列表 destination 表头/尾
    * `BLMOVE`&emsp;&emsp;&emsp;&emsp;LMOVE 的阻塞版本
    * `LPOS`&emsp;&emsp;&emsp;&emsp;&emsp;返回Redis列表内匹配元素的索引

|  命令 | 说明 |
|  ----  | ---- |
| [BLPOP](http://doc.redisfans.com/list/blpop.html) | `BLPOP key [key ...] timeout`<br>LPOP 的阻塞版本 |
| [BRPOP](http://doc.redisfans.com/list/brpop.html) | `BRPOP key [key ...] timeout`<br>RPOP 的阻塞版本 |
| [BRPOPLPUSH](http://doc.redisfans.com/list/brpoplpush.html) | `BRPOPLPUSH source destination timeout`<br>RPOPLPUSH 的阻塞版本 |
| [BLMOVE](https://redis.io/commands/blmove)`6.2.0` | `BLMOVE source destination LEFT|RIGHT LEFT|RIGHT timeout`<br>LMOVE 的阻塞版本  |
| [LINDEX](http://doc.redisfans.com/list/lindex.html) | `LINDEX key index`<br>返回列表 key 中，下标为 index 的元素 |
| [LINSERT](http://doc.redisfans.com/list/linsert.html) | `LINSERT key BEFORE|AFTER pivot value`<br>将值 value 插入到列表 key 当中，位于值 pivot 之前或之后 |
| [LLEN](http://doc.redisfans.com/list/llen.html) | `LLEN key`<br>返返回列表 key 的长度 |
| [LPOP](http://doc.redisfans.com/list/lpop.html) | `LPOP key`<br>移除并返回列表 key 的头元素 |
| [LPOS](https://redis.io/commands/lpos)`6.0.6` | `LPOS key element [RANK rank] [COUNT num-matches] [MAXLEN len]`<br>返回Redis列表内匹配元素的索引 |
| [LPUSH](http://doc.redisfans.com/list/lpush.html) | `LPUSH key value [value ...]`<br>将一个或多个值 value 插入到列表 key 的表头 |
| [LPUSHX](http://doc.redisfans.com/list/lpushx.html) | `LPUSHX key value`<br>将值 value 插入到列表 key 的表头，当且仅当 key 存在并且是一个列表 |
| [LRANGE](http://doc.redisfans.com/list/lrange.html) | `LRANGE key start stop`<br>返回列表 key 里指定范围内的元素 |
| [LREM](http://doc.redisfans.com/list/lrem.html) | `LREM key count value`<br>根据参数 count 的值，移除列表中与参数 value 相等的元素 |
| [LSET](http://doc.redisfans.com/list/lset.html) | `LSET key index value`<br>将列表 key 下标为 index 的元素的值设置为 value |
| [LTRIM](http://doc.redisfans.com/list/ltrim.html) | `LTRIM key start stop`<br>对一个列表进行修剪(trim)，就是说，让列表只保留指定区间内的元素，不在指定区间之内的元素都将被删除 |
| [RPOP](http://doc.redisfans.com/list/rpop.html) | `RPOP key`<br>移除并返回列表 key 的尾元素 |
| [RPOPLPUSH](http://doc.redisfans.com/list/rpoplpush.html) | `RPOPLPUSH source destination`<br>原子性地返回并移除列表 source 尾元素， 并把该元素插入到列表 destination 表头 |
| [LMOVE](https://redis.io/commands/lmove)`6.2.0` | `LMOVE source destination LEFT|RIGHT LEFT|RIGHT`<br>原子性地返回并移除列表 source 头/尾元素， 并把该元素放入列表 destination 表头/尾  |
| [RPUSH](http://doc.redisfans.com/list/rpush.html) | `RPUSH key value [value ...]`<br>将一个或多个值 value 插入到列表 key 的表尾(最右边) |
| [RPUSHX](http://doc.redisfans.com/list/rpushx.html) | `RPUSHX key value`<br>将值 value 插入到列表 key 的表尾，当且仅当 key 存在并且是一个列表 |
