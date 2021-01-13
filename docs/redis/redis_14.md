---
title: Hash(哈希表)
---

* 设置
    * `HMSET`&emsp;&emsp;&emsp;&emsp;&emsp;同时将多个 field-value (域-值)对设置到哈希表 key 中
    * `HSET`&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;将哈希表 key 中的域 field 的值设为 value
    * `HSETNX`&emsp;&emsp;&emsp;&emsp;&ensp;将哈希表 key 中的域 field 的值设置为 value ，当且仅当域 field 不存在
    * `HINCRBY`&emsp;&emsp;&emsp;&emsp;为哈希表 key 中的域 field 的值加上增量 increment
    * `HINCRBYFLOAT`&emsp;&ensp;为哈希表 key 中的域 field 加上浮点数增量 increment
* 获取
    * `HEXISTS`&emsp;&emsp;&emsp;&emsp;查看哈希表 key 中，给定域 field 是否存在
    * `HGET`&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;返回哈希表 key 中，给定域 field 的值
    * `HGETALL`&emsp;&emsp;&emsp;&emsp;返回哈希表 key 中，所有的域和值
    * `HMGET`&emsp;&emsp;&emsp;&emsp;&emsp;返回哈希表 key 中，一个或多个给定域的值
    * `HKEYS`&emsp;&emsp;&emsp;&emsp;&emsp;返回哈希表 key 中的所有域
    * `HLEN`&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;返回哈希表 key 中域的数量
    * `HSTRLEN`&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;返回hash指定field的value的字符串长度
    * `HVALS`&emsp;&emsp;&emsp;&emsp;&emsp;返回哈希表 key 中所有域的值
    * `HSCAN`&emsp;&emsp;&emsp;&emsp;&emsp;具体信息请参考 SCAN 命令
* 删除
    * `HDEL`&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;删除哈希表 key 中的一个或多个指定域，不存在的域将被忽略

|  命令 | 说明 |
|  ----  | ---- |
| [HDEL](http://doc.redisfans.com/hash/hdel.html) | `HDEL key field [field ...]`<br>删除哈希表 key 中的一个或多个指定域，不存在的域将被忽略 |
| [HEXISTS](http://doc.redisfans.com/hash/hexists.html) | `HEXISTS key field`<br>查看哈希表 key 中，给定域 field 是否存在 |
| [HGET](http://doc.redisfans.com/hash/hget.html) | `HGET key field`<br>返回哈希表 key 中给定域 field 的值 |
| [HGETALL](http://doc.redisfans.com/hash/hgetall.html) | `HGETALL key`<br>返回哈希表 key 中，所有的域和值 |
| [HINCRBY](http://doc.redisfans.com/hash/hincrby.html) | `HINCRBY key field increment`<br>为哈希表 key 中的域 field 的值加上增量 increment |
| [HINCRBYFLOAT](http://doc.redisfans.com/hash/hincrbyfloat.html) | `HINCRBYFLOAT key field increment`<br>为哈希表 key 中的域 field 加上浮点数增量 increment |
| [HKEYS](http://doc.redisfans.com/hash/hkeys.html) | `HKEYS key`<br>返回哈希表 key 中的所有域 |
| [HLEN](http://doc.redisfans.com/hash/hlen.html) | `HLEN key`<br>返回哈希表 key 中域的数量 |
| [HMGET](http://doc.redisfans.com/hash/hmget.html) | `HMGET key field [field ...]`<br>返回哈希表 key 中，一个或多个给定域的值 |
| [HMSET](http://doc.redisfans.com/hash/hmset.html) | `HMSET key field value [field value ...]`<br>同时将多个 field-value (域-值)对设置到哈希表 key 中 |
| [HSET](http://doc.redisfans.com/hash/hset.html) | `HSET key field value`<br>将哈希表 key 中的域 field 的值设为 value |
| [HSETNX](http://doc.redisfans.com/hash/hsetnx.html) | `HSETNX key field value`<br>将哈希表 key 中的域 field 的值设置为 value ，当且仅当域 field 不存在 |
| [HSTRLEN](http://doc.redisfans.com/hash/hstrlen.html) | `HSTRLEN key field`<br>返回hash指定field的value的字符串长度，如果hash或者field不存在，返回0 |
| [HVALS](http://doc.redisfans.com/hash/hvals.html) | `HVALS key`<br>返回哈希表 key 中所有域的值 |
| [HSCAN](http://doc.redisfans.com/hash/hscan.html) | `HSCAN key cursor [MATCH pattern] [COUNT count]`<br>具体信息请参考 SCAN 命令 |