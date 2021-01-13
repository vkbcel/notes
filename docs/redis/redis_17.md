---
title: SortedSet(有序集合)
---

* 设置
    * `ZADD`&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;将一个或多个 member 元素及其 score 值加入到有序集 key 当中
    * `ZINCRBY`&emsp;&emsp;&emsp;&emsp;&ensp;将有序集 key 的成员 member 的 score 值加上增量 increment
    * `ZINTERSTORE`&emsp;&emsp;&ensp;将所有给定有序集之间的交集保存到 destination
    * `ZUNIONSTORE`&emsp;&emsp;&ensp;将所有给定有序集之间的并集保存到 destination
* 获取
    * `ZCARD`&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;返回有序集 key 中的元素数量
    * `ZCOUNT`&emsp;&emsp;&emsp;&emsp;&emsp;返回有序集 key 中，指定 score 之间的元素数量
    * `ZLEXCOUNT`&emsp;&emsp;&emsp;&ensp;返回有序集 key 中，指定 member 之间的成员数量
    * `ZRANGE`&emsp;&emsp;&emsp;&emsp;&emsp;返回有序集 key 中，指定 rank 区间内的成员，按 rank 从小到大排列
    * `ZRANGEBYLEX`&emsp;&emsp;&ensp;返回有序集 key 中，指定 member 区间内的成员，按 member 从小到大排列
    * `ZRANGEBYSCORE`&emsp;&ensp;返回有序集 key 中，指定 score 区间内的成员，按 score 从小到大排列
    * `ZRANK`&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;返回有序集 key 中，成员 member 的排名，按 score 从小到大排列
    * `ZREVRANGE`&emsp;&emsp;&emsp;&ensp;返回有序集 key 中，指定 rank 区间内的成员，按 rank 从大到小排列
    * `ZREVRANGEBYLEX`&emsp;返回有序集 key 中，指定 member 区间内的成员，按 member 从大到小排列
    * `ZREVRANGEBYSCORE`返回有序集 key 中，指定 score 区间内的成员，按 score 从大到小排列
    * `ZREVRANK`&emsp;&emsp;&emsp;&emsp;返回有序集 key 中，成员 member 的排名，按 score 从大到小排列
    * `ZSCORE`&emsp;&emsp;&emsp;&emsp;&emsp;返回有序集 key 中，成员 member 的 score 值
    * `ZSCAN`&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;增量迭代
* 删除
    * `ZREM`&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;移除有序集 key 中的一个或多个成员
    * `ZREMRANGEBYLEX`&emsp;移除有序集 key 中，指定 member 区间的所有成员
    * `ZREMRANGEBYRANK`&ensp;移除有序集 key 中，指定 rank 区间内的所有成员
    * `ZREMRANGEBYSCORE`移除有序集 key 中，指定 score 区间内的所有成员
* 5.0.0
    * `ZPOPMAX`&emsp;&emsp;&emsp;&emsp;&ensp;删除并返回有序集 key 中最多count个得分最高的成员
    * `BZPOPMAX`&emsp;&emsp;&emsp;&emsp;ZPOPMAX 的阻塞版本
    * `ZPOPMIN`&emsp;&emsp;&emsp;&emsp;&ensp;删除并返回有序集 key 中最多count个得分最低的成员
    * `BZPOPMIN`&emsp;&emsp;&emsp;&emsp;POPMIN 的阻塞版本
* 6.2.0
    * `ZRANGESTORE`&emsp;&emsp;&ensp;将有序集 key 中，指定 rank 区间内的成员保存到 destination
    * `ZDIFF`&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;返回所有给定有序集之间的差集
    * `ZDIFFSTORE`&emsp;&emsp;&emsp;将所有给定有序集之间的差集保存到 destination
    * `ZINTER`&emsp;&emsp;&emsp;&emsp;&emsp;返回所有给定有序集之间的交集
    * `ZUNION`&emsp;&emsp;&emsp;&emsp;&emsp;返回所有给定有序集之间的并集
    * `ZMSCORE`&emsp;&emsp;&emsp;&emsp;&ensp;返回有序集 key 中，多个成员 member 的 score 值

|  命令 | 说明 |
|  ----  | ---- |
| [BZPOPMAX](https://redis.io/commands/bzpopmax)`5.0.0` | `BZPOPMAX key [key ...] timeout`<br>ZPOPMAX 的阻塞版本 |
| [BZPOPMIN](https://redis.io/commands/bzpopmin)`5.0.0` | `BZPOPMIN key [key ...] timeout`<br>ZPOPMIN 的阻塞版本 |
| [ZADD](http://doc.redisfans.com/sorted_set/zadd.html) | `ZADD key score member [[score member] [score member] ...]`<br>将一个或多个 member 元素及其 score 值加入到有序集 key 当中 |
| [ZCARD](http://doc.redisfans.com/sorted_set/zcard.html) | `ZCARD key`<br>返回有序集 key 中元素的数量 |
| [ZCOUNT](http://doc.redisfans.com/sorted_set/zcount.html) | `ZCOUNT key min max`<br>返回有序集 key 中，指定 score 之间的元素数量 |
| [ZDIFF](https://redis.io/commands/zdiff)`6.2.0` | `ZDIFF numkeys key [key ...] [WITHSCORES]`<br>返回所有给定有序集之间的差集 |
| [ZDIFFSTORE](https://redis.io/commands/zdiffstore)`6.2.0` | `ZDIFFSTORE destination numkeys key [key ...]`<br>将所有给定有序集之间的差集保存到 destination |
| [ZINCRBY](http://doc.redisfans.com/sorted_set/zincrby.html) | `ZINCRBY key increment member`<br>将有序集 key 的成员 member 的 score 值加上增量 increment |
| [ZINTER](https://redis.io/commands/zinter)`6.2.0` | `ZINTER numkeys key [key ...] [WEIGHTS weight [weight ...]] [AGGREGATE SUM|MIN|MAX] [WITHSCORES]`<br>返回所有给定有序集之间的交集 |
| [ZINTERSTORE]()`6.2.0` | `ZINTERSTORE destination numkeys key [key ...] [WEIGHTS weight [weight ...]] [AGGREGATE SUM|MIN|MAX]`<br>将所有给定有序集之间的交集保存到 destination |
| [ZLEXCOUNT](http://www.redis.cn/commands/zlexcount.html) | `http://www.redis.cn/commands/zlexcount.html`<br>返回有序集 key 中，指定 member 之间的成员数量 |
| [ZMSCORE](https://redis.io/commands/zmscore)`6.2.0` | `ZMSCORE key member [member ...]`<br>返回有序集 key 中，多个成员 member 的 score 值 |
| [ZPOPMAX](https://redis.io/commands/zpopmax) | `ZPOPMAX key [count]`<br>删除并返回有序集 key 中最多count个得分最高的成员 |
| [ZPOPMIN](https://redis.io/commands/zpopmin) | `ZPOPMIN key [count]`<br>删除并返回有序集 key 中最多count个得分最低的成员 |
| [ZRANGE](http://doc.redisfans.com/sorted_set/zrange.html) | `ZRANGE key start stop [WITHSCORES]`<br>返回有序集 key 中，指定 rank 区间内的成员，按 rank 从小到大排列 |
| [ZRANGEBYLEX](http://www.redis.cn/commands/zrangebylex.html) | `ZRANGEBYLEX key min max [LIMIT offset count]`<br>返回有序集 key 中，指定 member 区间内的成员，按 member 从小到大排列 |
| [ZRANGEBYSCORE](http://doc.redisfans.com/sorted_set/zrangebyscore.html) | `ZRANGEBYSCORE key min max [WITHSCORES] [LIMIT offset count]`<br>返回有序集 key 中，指定 score 区间内的成员，按 score 从小到大排列 |
| [ZRANGESTORE](https://redis.io/commands/zrangestore)`6.2.0` | `ZRANGESTORE dst src min max [BYSCORE|BYLEX] [REV] [LIMIT offset count]`<br>将有序集 key 中，指定 rank 区间内的成员保存到 destination |
| [ZRANK](http://doc.redisfans.com/sorted_set/zrank.html) | `ZRANK key member`<br>返回有序集 key 中，成员 member 的排名，按 score 从小到大排列 |
| [ZREM](http://doc.redisfans.com/sorted_set/zrem.html) | `ZREM key member [member ...]`<br>移除有序集 key 中的一个或多个成员，不存在的成员将被忽略 |
| [ZREMRANGEBYLEX](http://www.redis.cn/commands/zremrangebylex.html) | `ZREMRANGEBYLEX key min max`<br>移除有序集 key 中，指定 member 区间的所有成员 |
| [ZREMRANGEBYRANK](http://doc.redisfans.com/sorted_set/zremrangebyrank.html) | `ZREMRANGEBYRANK key start stop`<br>移除有序集 key 中，指定 rank 区间内的所有成员 |
| [ZREMRANGEBYSCORE](http://doc.redisfans.com/sorted_set/zremrangebyscore.html) | `ZREMRANGEBYSCORE key min max`<br>移除有序集 key 中，指定 score 区间内的所有成员 |
| [ZREVRANGE](http://doc.redisfans.com/sorted_set/zrevrange.html) | `ZREVRANGE key start stop [WITHSCORES]`<br>返回有序集 key 中，指定 rank 区间内的成员，按 rank 从大到小排列 |
| [ZREVRANGEBYLEX](http://www.redis.cn/commands/zrevrangebylex.html) | `ZREVRANGEBYLEX key max min [LIMIT offset count]`<br>返回有序集 key 中，指定 member 区间内的成员，按 member 从大到小排列 |
| [ZREVRANGEBYSCORE](http://doc.redisfans.com/sorted_set/zrevrangebyscore.html) | `ZREVRANGEBYSCORE key max min [WITHSCORES] [LIMIT offset count]`<br>返回有序集 key 中，指定 score 区间内的成员，按 score 从大到小排列 |
| [ZREVRANK](http://doc.redisfans.com/sorted_set/zrevrank.html) | `ZREVRANK key member`<br>返回有序集 key 中，成员 member 的排名，按 score 从大到小排列 |
| [ZSCAN](http://doc.redisfans.com/sorted_set/zscan.html) | `ZSCAN key cursor [MATCH pattern] [COUNT count]`<br>增量迭代 |
| [ZSCORE](http://doc.redisfans.com/sorted_set/zscore.html) | `ZSCORE key member`<br>返回有序集 key 中，成员 member 的 score 值 |
| [ZUNION](https://redis.io/commands/zunion) | `ZUNION numkeys key [key ...] [WEIGHTS weight [weight ...]] [AGGREGATE SUM|MIN|MAX] [WITHSCORES]`<br>返回所有给定有序集之间的并集 |
| [ZUNIONSTORE](https://redis.io/commands/zunionstore) | `ZUNIONSTORE destination numkeys key [key ...] [WEIGHTS weight [weight ...]] [AGGREGATE SUM|MIN|MAX]`<br>将所有给定有序集之间的并集保存到 destination |
