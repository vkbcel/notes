---
title: Keys(键)
---

* 设置
    * `SET`&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;将字符串值 value 关联到 key
    * `EXPIRE`&emsp;&emsp;&emsp;&emsp;&ensp;为给定 key 设置生存时间
    * `PEXPIRE`&emsp;&emsp;&emsp;&emsp;毫秒版 EXPIRE
    * `EXPIREAT`&emsp;&emsp;&emsp;&ensp;以 UNIX 时间戳格式为给定 key 设置生存时间
    * `PEXPIREAT`&emsp;&emsp;&emsp;将 key 原子性地从当前实例传送到目标实例的指定数据库上
    * `MOVE`&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;将当前数据库的 key 移动到给定的数据库 db 当中
    * `PERSIST`&emsp;&emsp;&emsp;&emsp;移除给定 key 的生存时间
    * `TTL`&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;以秒为单位，返回给定 key 的剩余生存时间(TTL, time to live)
    * `PTTL`&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;毫秒版 TTL
    * `RENAME`&emsp;&emsp;&emsp;&emsp;&ensp;将 key 改名为 newkey
    * `RENAMENX`&emsp;&emsp;&emsp;&ensp;当且仅当 newkey 不存在时，将 key 改名为 newkey
    * `TOUCH`&emsp;&emsp;&emsp;&emsp;&emsp;变更多个 key 的最后访问时间
    * `UNLINK`&emsp;&emsp;&emsp;&ensp;&emsp;异步删除 key
    * `WAIT`&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;阻塞当前客户端直到所有先前的写命令均已成功传输
* 获取
    * `EXISTS`&emsp;&emsp;&emsp;&emsp;&ensp;检查给定 key 是否存在
    * `KEYS`&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;查找所有符合给定模式 pattern 的 key
    * `OBJECT`&emsp;&emsp;&emsp;&emsp;&ensp;从内部察看给定 key 的 Redis 对象
    * `RANDOMKEY`&emsp;&emsp;&emsp;从当前数据库中随机返回(不删除)一个 key
    * `SORT`&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;返回或保存给定列表、集合、有序集合 key 中经过排序的元素
    * `TYPE`&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;返回 key 所储存的值的类型
    * `SCAN`&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;增量迭代
* 删除
    * `DEL`&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;删除给定的一个或多个 key
* 序列化
    * `DUMP`&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;序列化给定 key ，并返回被序列化的值
    * `RESTORE`&emsp;&emsp;&emsp;&emsp;反序列化给定的序列化值，并将它和给定的 key 关联
* 6.0.0
    * `COPY`&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;该命令将存储在 source 键上的值复制到 destination 键上

|  命令 | 说明 |
|  ----  | ---- |
| [COPY](https://redis.io/commands/copy)`6.2.0` | `COPY source destination [DB destination-db] [REPLACE]`<br>该命令将存储在 source 键上的值复制到 destination 键上 |
| [DEL](http://doc.redisfans.com/key/del.html) | `DEL key [key ...]`<br>删除给定的一个或多个 key |
| [DUMP](http://doc.redisfans.com/key/dump.html) | `DUMP key`<br>序列化给定 key ，并返回被序列化的值 |
| [EXISTS](http://doc.redisfans.com/key/exists.html) | `EXISTS key`<br>检查给定 key 是否存在 |
| [EXPIRE](http://doc.redisfans.com/key/expire.html) | `EXPIRE key seconds`<br>为给定 key 设置生存时间，当 key 过期时(生存时间为 0 )，它会被自动删除 |
| [EXPIREAT](http://doc.redisfans.com/key/expireat.html) | `EXPIREAT key timestamp`<br>以 UNIX 时间戳格式为给定 key 设置生存时间 |
| [KEYS](http://doc.redisfans.com/key/keys.html) | `KEYS pattern`<br>查找所有符合给定模式 pattern 的 key |
| [MIGRATE](http://doc.redisfans.com/key/migrate.html) | `MIGRATE host port key destination-db timeout [COPY] [REPLACE]`<br>将 key 原子性地从当前实例传送到目标实例的指定数据库上，一旦传送成功， key 保证会出现在目标实例上，而当前实例上的 key 会被删除 |
| [MOVE](http://doc.redisfans.com/key/move.html) | `MOVE key db`<br>将当前数据库的 key 移动到给定的数据库 db 当中 |
| [OBJECT](http://doc.redisfans.com/key/object.html) | `OBJECT subcommand [arguments [arguments]]`<br>从内部察看给定 key 的 Redis 对象 |
| [PERSIST](http://doc.redisfans.com/key/persist.html) | `PERSIST key`<br>移除给定 key 的生存时间，使 key 永不过期 |
| [PEXPIRE](http://doc.redisfans.com/key/pexpire.html) | `PEXPIRE key milliseconds`<br>毫秒版 EXPIRE |
| [PEXPIREAT](http://doc.redisfans.com/key/pexpireat.html) | `PEXPIREAT key milliseconds-timestamp`<br>毫秒版 EXPIREAT  |
| [PTTL](http://doc.redisfans.com/key/pttl.html) | `PTTL key`<br>毫秒版 TTL |
| [RANDOMKEY](http://doc.redisfans.com/key/randomkey.html) | `RANDOMKEY`<br>从当前数据库中随机返回(不删除)一个 key |
| [RENAME](http://doc.redisfans.com/key/rename.html) | `RENAME key newkey`<br>将 key 改名为 newkey |
| [RENAMENX](http://doc.redisfans.com/key/renamenx.html) | `RENAMENX key newkey`<br>当且仅当 newkey 不存在时，将 key 改名为 newkey |
| [RESTORE](http://doc.redisfans.com/key/restore.html) | `RESTORE key ttl serialized-value`<br>反序列化给定的序列化值，并将它和给定的 key 关联 |
| [SORT](http://doc.redisfans.com/key/sort.html) | `SORT key [BY pattern] [LIMIT offset count] [GET pattern [GET pattern ...]] [ASC | DESC] [ALPHA] [STORE destination]`<br>返回或保存给定列表、集合、有序集合 key 中经过排序的元素 |
| [TOUCH](https://redis.io/commands/touch) | `TOUCH key [key ...]`<br>变更多个 key 的最后访问时间 |
| [TTL](http://doc.redisfans.com/key/ttl.html) | `TTL key`<br>以秒为单位，返回给定 key 的剩余生存时间(TTL, time to live) |
| [TYPE](http://doc.redisfans.com/key/type.html) | `TYPE key`<br>返回 key 所储存的值的类型 |
| [UNLINK](https://redis.io/commands/unlink) | `UNLINK key [key ...]`<br>异步删除 key |
| [WAIT](https://redis.io/commands/wait) | `WAIT numreplicas timeout`<br>该命令将阻塞当前客户端，直到所有先前的写命令均已成功传输并至少由指定数量的副本进行确认或超时 |
| [SCAN](http://doc.redisfans.com/key/scan.html) | `SCAN cursor [MATCH pattern] [COUNT count]`<br>增量迭代 |
