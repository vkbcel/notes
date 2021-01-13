---
title: String(字符串)
---

* 设置
    * `SET`&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;将字符串值 value 关联到 key
    * `MSET`&emsp;&emsp;&emsp;&emsp;&emsp;同时设置一个或多个 key-value 对
    * `MSETNX`&emsp;&emsp;&emsp;&emsp;同时设置一个或多个 key-value 对，当且仅当所有给定 key 都不存在
    * `SETEX`&emsp;&emsp;&emsp;&emsp;&ensp;将值 value 关联到 key ，并将 key 的生存时间设为 seconds (以秒为单位)
    * `PSETEX`&emsp;&emsp;&emsp;&emsp;毫秒版 SETEX
    * `SETNX`&emsp;&emsp;&emsp;&emsp;&ensp;将 key 的值设为 value ，当且仅当 key 不存在
    * `SETRANGE`&emsp;&emsp;&emsp;用 value 参数覆写(overwrite)给定 key 所储存的字符串值，从偏移量 offset 开始
    * `APPEND`&emsp;&emsp;&emsp;&emsp;将 value 追加到 key 原来的值的末尾
* 获取
    * `GET`&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;返回 key 所关联的字符串值
    * `GETRANGE`&emsp;&emsp;&emsp;返回 key 中字符串值的子字符串
    * `GETSET`&emsp;&emsp;&emsp;&emsp;将给定 key 的值设为 value ，并返回 key 的旧值(old value)
    * `MGET`&emsp;&emsp;&emsp;&emsp;&emsp;返回所有(一个或多个)给定 key 的值
    * `STRLEN`&emsp;&emsp;&emsp;&emsp;返回 key 所储存的字符串值的长度
* 数值操作
    * `DECR`&emsp;&emsp;&emsp;&emsp;&emsp;将 key 中储存的数字值减一
    * `DECRBY`&emsp;&emsp;&emsp;&emsp;将 key 所储存的值减去减量 decrement
    * `INCR`&emsp;&emsp;&emsp;&emsp;&emsp;将 key 中储存的数字值增一
    * `INCRBY`&emsp;&emsp;&emsp;&emsp;将 key 所储存的值加上增量 increment
    * `INCRBYFLOAT`&emsp;&ensp;为 key 中所储存的值加上浮点数增量 increment
* 位操作
    * `SETBIT`&emsp;&emsp;&emsp;&emsp;对 key 所储存的字符串值，设置或清除指定偏移量上的位(bit)
    * `GETBIT`&emsp;&emsp;&emsp;&emsp;对 key 所储存的字符串值，获取指定偏移量上的位(bit)
    * `BITCOUNT`&emsp;&emsp;&emsp;计算给定字符串中，被设置为 1 的比特位的数量
    * `BITOP`&emsp;&emsp;&emsp;&emsp;&ensp;对一个或多个保存二进制位的字符串 key 进行位元操作
    * `BITPOS`&emsp;&emsp;&emsp;&emsp;返回字符串里面第一个被设置为1或者0的bit位
    * `BITFIELD`&emsp;&emsp;&emsp;&emsp;&ensp;提供一次操作多个位的能力
* 6.0.0
    * `STRALGO`&emsp;对字符串进行操作的复杂算法，目前只支持LCS算法（最长公共子串）

|  命令 | 说明 |
|  ----  | ---- |
| [APPEND](http://doc.redisfans.com/string/append.html) | `APPEND key value`<br>如果 key 已经存在并且是一个字符串， APPEND 命令将 value 追加到 key 原来的值的末尾 |
| [BITCOUNT](http://doc.redisfans.com/string/bitcount.html) | `BITCOUNT key [start] [end]`<br>计算给定字符串中，被设置为 1 的比特位的数量 |
| [BITFIELD](http://doc.redisfans.com/string/bitfield.html) | 提供一次操作多个位的能力 |
| [BITOP](http://doc.redisfans.com/string/bitop.html) | `BITOP operation destkey key [key ...]`<br>对一个或多个保存二进制位的字符串 key 进行位元操作，并将结果保存到 destkey 上|
| [BITPOS](http://doc.redisfans.com/string/bitpos.html) | `BITPOS key bit [start] [end]`<br>返回字符串里面第一个被设置为1或者0的bit位 |
| [DECR](http://doc.redisfans.com/string/decr.html) | `DECR key`<br>将 key 中储存的数字值减一 |
| [DECRBY](http://doc.redisfans.com/string/decrby.html) | `DECRBY key decrement`<br>将 key 所储存的值减去减量 decrement |
| [GET](http://doc.redisfans.com/string/get.html) | `GET key`<br>返回 key 所关联的字符串值 |
| [GETBIT](http://doc.redisfans.com/string/getbit.html) | `GETBIT key offset`<br>对 key 所储存的字符串值，获取指定偏移量上的位(bit) |
| [GETRANGE](http://doc.redisfans.com/string/getrange.html) | `GETRANGE key start end`<br>返回 key 中字符串值的子字符串，字符串的截取范围由 start 和 end 两个偏移量决定(包括 start 和 end 在内) |
| [GETSET](http://doc.redisfans.com/string/getset.html) | `GETSET key value`<br>将给定 key 的值设为 value ，并返回 key 的旧值(old value) |
| [INCR](http://doc.redisfans.com/string/incr.html) | `INCR key`<br>将 key 中储存的数字值增一 |
| [INCRBY](http://doc.redisfans.com/string/incrby.html) | `INCRBY key increment`<br>将 key 所储存的值加上增量 increment |
| [INCRBYFLOAT](http://doc.redisfans.com/string/incrbyfloat.html) | `INCRBYFLOAT key increment`<br>为 key 中所储存的值加上浮点数增量 increment |
| [MGET](http://doc.redisfans.com/string/mget.html) | `MGET key [key ...]`<br>返回所有(一个或多个)给定 key 的值 |
| [MSET](http://doc.redisfans.com/string/mset.html) | `MSET key value [key value ...]`<br>同时设置一个或多个 key-value 对 |
| [MSETNX](http://doc.redisfans.com/string/msetnx.html) | `MSETNX key value [key value ...]`<br>同时设置一个或多个 key-value 对，当且仅当所有给定 key 都不存在 |
| [PSETEX](http://doc.redisfans.com/string/psetex.html) | `PSETEX key milliseconds value`<br>这个命令和 SETEX 命令相似，但它以毫秒为单位设置 key 的生存时间，而不是像 SETEX 命令那样，以秒为单位 |
| [SET](http://doc.redisfans.com/string/set.html) | `SET key value [EX seconds] [PX milliseconds] [NX|XX]`<br>将字符串值 value 关联到 key |
| [SETBIT](http://doc.redisfans.com/string/setbit.html) | `SETBIT key offset value`<br>对 key 所储存的字符串值，设置或清除指定偏移量上的位(bit) |
| [SETEX](http://doc.redisfans.com/string/setex.html) | `SETEX key seconds value`<br>将值 value 关联到 key ，并将 key 的生存时间设为 seconds (以秒为单位) |
| [SETNX](http://doc.redisfans.com/string/setnx.html) | `SETNX key value`<br>将 key 的值设为 value ，当且仅当 key 不存在 |
| [SETRANGE](http://doc.redisfans.com/string/setrange.html) | `SETRANGE key offset value`<br>用 value 参数覆写(overwrite)给定 key 所储存的字符串值，从偏移量 offset 开始 |
| [STRALGO](https://redis.io/commands/stralgo)`6.0.0` | `STRALGO LCS algo-specific-argument [algo-specific-argument ...]`<br>对字符串进行操作的复杂算法，目前只支持LCS算法（最长公共子串） |
| [STRLEN](http://doc.redisfans.com/string/strlen.html) | `STRLEN key`<br>返回 key 所储存的字符串值的长度 |
