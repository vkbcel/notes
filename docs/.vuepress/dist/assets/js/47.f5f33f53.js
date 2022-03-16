(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{411:function(e,r,t){"use strict";t.r(r);var o=t(25),n=Object(o.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("ul",[t("li",[e._v("设置\n"),t("ul",[t("li",[t("code",[e._v("ZADD")]),e._v("      将一个或多个 member 元素及其 score 值加入到有序集 key 当中")]),e._v(" "),t("li",[t("code",[e._v("ZINCRBY")]),e._v("     将有序集 key 的成员 member 的 score 值加上增量 increment")]),e._v(" "),t("li",[t("code",[e._v("ZINTERSTORE")]),e._v("   将所有给定有序集之间的交集保存到 destination")]),e._v(" "),t("li",[t("code",[e._v("ZUNIONSTORE")]),e._v("   将所有给定有序集之间的并集保存到 destination")])])]),e._v(" "),t("li",[e._v("获取\n"),t("ul",[t("li",[t("code",[e._v("ZCARD")]),e._v("      返回有序集 key 中的元素数量")]),e._v(" "),t("li",[t("code",[e._v("ZCOUNT")]),e._v("     返回有序集 key 中，指定 score 之间的元素数量")]),e._v(" "),t("li",[t("code",[e._v("ZLEXCOUNT")]),e._v("    返回有序集 key 中，指定 member 之间的成员数量")]),e._v(" "),t("li",[t("code",[e._v("ZRANGE")]),e._v("     返回有序集 key 中，指定 rank 区间内的成员，按 rank 从小到大排列")]),e._v(" "),t("li",[t("code",[e._v("ZRANGEBYLEX")]),e._v("   返回有序集 key 中，指定 member 区间内的成员，按 member 从小到大排列")]),e._v(" "),t("li",[t("code",[e._v("ZRANGEBYSCORE")]),e._v("  返回有序集 key 中，指定 score 区间内的成员，按 score 从小到大排列")]),e._v(" "),t("li",[t("code",[e._v("ZRANK")]),e._v("      返回有序集 key 中，成员 member 的排名，按 score 从小到大排列")]),e._v(" "),t("li",[t("code",[e._v("ZREVRANGE")]),e._v("    返回有序集 key 中，指定 rank 区间内的成员，按 rank 从大到小排列")]),e._v(" "),t("li",[t("code",[e._v("ZREVRANGEBYLEX")]),e._v(" 返回有序集 key 中，指定 member 区间内的成员，按 member 从大到小排列")]),e._v(" "),t("li",[t("code",[e._v("ZREVRANGEBYSCORE")]),e._v("返回有序集 key 中，指定 score 区间内的成员，按 score 从大到小排列")]),e._v(" "),t("li",[t("code",[e._v("ZREVRANK")]),e._v("    返回有序集 key 中，成员 member 的排名，按 score 从大到小排列")]),e._v(" "),t("li",[t("code",[e._v("ZSCORE")]),e._v("     返回有序集 key 中，成员 member 的 score 值")]),e._v(" "),t("li",[t("code",[e._v("ZSCAN")]),e._v("      增量迭代")])])]),e._v(" "),t("li",[e._v("删除\n"),t("ul",[t("li",[t("code",[e._v("ZREM")]),e._v("      移除有序集 key 中的一个或多个成员")]),e._v(" "),t("li",[t("code",[e._v("ZREMRANGEBYLEX")]),e._v(" 移除有序集 key 中，指定 member 区间的所有成员")]),e._v(" "),t("li",[t("code",[e._v("ZREMRANGEBYRANK")]),e._v(" 移除有序集 key 中，指定 rank 区间内的所有成员")]),e._v(" "),t("li",[t("code",[e._v("ZREMRANGEBYSCORE")]),e._v("移除有序集 key 中，指定 score 区间内的所有成员")])])]),e._v(" "),t("li",[e._v("5.0.0\n"),t("ul",[t("li",[t("code",[e._v("ZPOPMAX")]),e._v("     删除并返回有序集 key 中最多count个得分最高的成员")]),e._v(" "),t("li",[t("code",[e._v("BZPOPMAX")]),e._v("    ZPOPMAX 的阻塞版本")]),e._v(" "),t("li",[t("code",[e._v("ZPOPMIN")]),e._v("     删除并返回有序集 key 中最多count个得分最低的成员")]),e._v(" "),t("li",[t("code",[e._v("BZPOPMIN")]),e._v("    POPMIN 的阻塞版本")])])]),e._v(" "),t("li",[e._v("6.2.0\n"),t("ul",[t("li",[t("code",[e._v("ZRANGESTORE")]),e._v("   将有序集 key 中，指定 rank 区间内的成员保存到 destination")]),e._v(" "),t("li",[t("code",[e._v("ZDIFF")]),e._v("      返回所有给定有序集之间的差集")]),e._v(" "),t("li",[t("code",[e._v("ZDIFFSTORE")]),e._v("   将所有给定有序集之间的差集保存到 destination")]),e._v(" "),t("li",[t("code",[e._v("ZINTER")]),e._v("     返回所有给定有序集之间的交集")]),e._v(" "),t("li",[t("code",[e._v("ZUNION")]),e._v("     返回所有给定有序集之间的并集")]),e._v(" "),t("li",[t("code",[e._v("ZMSCORE")]),e._v("     返回有序集 key 中，多个成员 member 的 score 值")])])])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("命令")]),e._v(" "),t("th",[e._v("说明")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("a",{attrs:{href:"https://redis.io/commands/bzpopmax",target:"_blank",rel:"noopener noreferrer"}},[e._v("BZPOPMAX"),t("OutboundLink")],1),t("code",[e._v("5.0.0")])]),e._v(" "),t("td",[t("code",[e._v("BZPOPMAX key [key ...] timeout")]),t("br"),e._v("ZPOPMAX 的阻塞版本")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"https://redis.io/commands/bzpopmin",target:"_blank",rel:"noopener noreferrer"}},[e._v("BZPOPMIN"),t("OutboundLink")],1),t("code",[e._v("5.0.0")])]),e._v(" "),t("td",[t("code",[e._v("BZPOPMIN key [key ...] timeout")]),t("br"),e._v("ZPOPMIN 的阻塞版本")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"http://doc.redisfans.com/sorted_set/zadd.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZADD"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("code",[e._v("ZADD key score member [[score member] [score member] ...]")]),t("br"),e._v("将一个或多个 member 元素及其 score 值加入到有序集 key 当中")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"http://doc.redisfans.com/sorted_set/zcard.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZCARD"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("code",[e._v("ZCARD key")]),t("br"),e._v("返回有序集 key 中元素的数量")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"http://doc.redisfans.com/sorted_set/zcount.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZCOUNT"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("code",[e._v("ZCOUNT key min max")]),t("br"),e._v("返回有序集 key 中，指定 score 之间的元素数量")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"https://redis.io/commands/zdiff",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZDIFF"),t("OutboundLink")],1),t("code",[e._v("6.2.0")])]),e._v(" "),t("td",[t("code",[e._v("ZDIFF numkeys key [key ...] [WITHSCORES]")]),t("br"),e._v("返回所有给定有序集之间的差集")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"https://redis.io/commands/zdiffstore",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZDIFFSTORE"),t("OutboundLink")],1),t("code",[e._v("6.2.0")])]),e._v(" "),t("td",[t("code",[e._v("ZDIFFSTORE destination numkeys key [key ...]")]),t("br"),e._v("将所有给定有序集之间的差集保存到 destination")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"http://doc.redisfans.com/sorted_set/zincrby.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZINCRBY"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("code",[e._v("ZINCRBY key increment member")]),t("br"),e._v("将有序集 key 的成员 member 的 score 值加上增量 increment")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"https://redis.io/commands/zinter",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZINTER"),t("OutboundLink")],1),t("code",[e._v("6.2.0")])]),e._v(" "),t("td",[t("code",[e._v("ZINTER numkeys key [key ...] [WEIGHTS weight [weight ...]] [AGGREGATE SUM|MIN|MAX] [WITHSCORES]")]),t("br"),e._v("返回所有给定有序集之间的交集")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:""}},[e._v("ZINTERSTORE")]),t("code",[e._v("6.2.0")])]),e._v(" "),t("td",[t("code",[e._v("ZINTERSTORE destination numkeys key [key ...] [WEIGHTS weight [weight ...]] [AGGREGATE SUM|MIN|MAX]")]),t("br"),e._v("将所有给定有序集之间的交集保存到 destination")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"http://www.redis.cn/commands/zlexcount.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZLEXCOUNT"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("code",[e._v("http://www.redis.cn/commands/zlexcount.html")]),t("br"),e._v("返回有序集 key 中，指定 member 之间的成员数量")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"https://redis.io/commands/zmscore",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZMSCORE"),t("OutboundLink")],1),t("code",[e._v("6.2.0")])]),e._v(" "),t("td",[t("code",[e._v("ZMSCORE key member [member ...]")]),t("br"),e._v("返回有序集 key 中，多个成员 member 的 score 值")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"https://redis.io/commands/zpopmax",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZPOPMAX"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("code",[e._v("ZPOPMAX key [count]")]),t("br"),e._v("删除并返回有序集 key 中最多count个得分最高的成员")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"https://redis.io/commands/zpopmin",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZPOPMIN"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("code",[e._v("ZPOPMIN key [count]")]),t("br"),e._v("删除并返回有序集 key 中最多count个得分最低的成员")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"http://doc.redisfans.com/sorted_set/zrange.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZRANGE"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("code",[e._v("ZRANGE key start stop [WITHSCORES]")]),t("br"),e._v("返回有序集 key 中，指定 rank 区间内的成员，按 rank 从小到大排列")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"http://www.redis.cn/commands/zrangebylex.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZRANGEBYLEX"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("code",[e._v("ZRANGEBYLEX key min max [LIMIT offset count]")]),t("br"),e._v("返回有序集 key 中，指定 member 区间内的成员，按 member 从小到大排列")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"http://doc.redisfans.com/sorted_set/zrangebyscore.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZRANGEBYSCORE"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("code",[e._v("ZRANGEBYSCORE key min max [WITHSCORES] [LIMIT offset count]")]),t("br"),e._v("返回有序集 key 中，指定 score 区间内的成员，按 score 从小到大排列")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"https://redis.io/commands/zrangestore",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZRANGESTORE"),t("OutboundLink")],1),t("code",[e._v("6.2.0")])]),e._v(" "),t("td",[t("code",[e._v("ZRANGESTORE dst src min max [BYSCORE|BYLEX] [REV] [LIMIT offset count]")]),t("br"),e._v("将有序集 key 中，指定 rank 区间内的成员保存到 destination")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"http://doc.redisfans.com/sorted_set/zrank.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZRANK"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("code",[e._v("ZRANK key member")]),t("br"),e._v("返回有序集 key 中，成员 member 的排名，按 score 从小到大排列")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"http://doc.redisfans.com/sorted_set/zrem.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZREM"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("code",[e._v("ZREM key member [member ...]")]),t("br"),e._v("移除有序集 key 中的一个或多个成员，不存在的成员将被忽略")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"http://www.redis.cn/commands/zremrangebylex.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZREMRANGEBYLEX"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("code",[e._v("ZREMRANGEBYLEX key min max")]),t("br"),e._v("移除有序集 key 中，指定 member 区间的所有成员")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"http://doc.redisfans.com/sorted_set/zremrangebyrank.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZREMRANGEBYRANK"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("code",[e._v("ZREMRANGEBYRANK key start stop")]),t("br"),e._v("移除有序集 key 中，指定 rank 区间内的所有成员")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"http://doc.redisfans.com/sorted_set/zremrangebyscore.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZREMRANGEBYSCORE"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("code",[e._v("ZREMRANGEBYSCORE key min max")]),t("br"),e._v("移除有序集 key 中，指定 score 区间内的所有成员")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"http://doc.redisfans.com/sorted_set/zrevrange.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZREVRANGE"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("code",[e._v("ZREVRANGE key start stop [WITHSCORES]")]),t("br"),e._v("返回有序集 key 中，指定 rank 区间内的成员，按 rank 从大到小排列")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"http://www.redis.cn/commands/zrevrangebylex.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZREVRANGEBYLEX"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("code",[e._v("ZREVRANGEBYLEX key max min [LIMIT offset count]")]),t("br"),e._v("返回有序集 key 中，指定 member 区间内的成员，按 member 从大到小排列")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"http://doc.redisfans.com/sorted_set/zrevrangebyscore.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZREVRANGEBYSCORE"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("code",[e._v("ZREVRANGEBYSCORE key max min [WITHSCORES] [LIMIT offset count]")]),t("br"),e._v("返回有序集 key 中，指定 score 区间内的成员，按 score 从大到小排列")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"http://doc.redisfans.com/sorted_set/zrevrank.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZREVRANK"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("code",[e._v("ZREVRANK key member")]),t("br"),e._v("返回有序集 key 中，成员 member 的排名，按 score 从大到小排列")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"http://doc.redisfans.com/sorted_set/zscan.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZSCAN"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("code",[e._v("ZSCAN key cursor [MATCH pattern] [COUNT count]")]),t("br"),e._v("增量迭代")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"http://doc.redisfans.com/sorted_set/zscore.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZSCORE"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("code",[e._v("ZSCORE key member")]),t("br"),e._v("返回有序集 key 中，成员 member 的 score 值")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"https://redis.io/commands/zunion",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZUNION"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("code",[e._v("ZUNION numkeys key [key ...] [WEIGHTS weight [weight ...]] [AGGREGATE SUM|MIN|MAX] [WITHSCORES]")]),t("br"),e._v("返回所有给定有序集之间的并集")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"https://redis.io/commands/zunionstore",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZUNIONSTORE"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("code",[e._v("ZUNIONSTORE destination numkeys key [key ...] [WEIGHTS weight [weight ...]] [AGGREGATE SUM|MIN|MAX]")]),t("br"),e._v("将所有给定有序集之间的并集保存到 destination")])])])])])}),[],!1,null,null,null);r.default=n.exports}}]);