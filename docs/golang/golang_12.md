---
title: 字符串处理[备忘]
---

*转义字符*

* Value: []int64{0, 1}

|  表达式 | 结果  | 注意 |
|  ----  | ----  | ---- | 
| "" |  | 字符串零值 |
| "Japan 日本" | Japan 日本 | Unicode |
| "\xe6\x97\xa5" | 日 | UTF-8编码 |
| "\u65E5" | 日 | Unicode码位 |
| "\\" | \ | 反斜杠 |
| "\"" | " | 双引号 |
| "\n" |  | 换行 |
| "\t" |  | Tab |
| `\xe6` | \xe6 | 原始字符串(不进行任何转义) |
| html.EscapeString("<>") | &lt;&gt; | HTML转义(< > & ' ") |
| url.PathEscape("A B") | A%20B | URL编码(Percent-encoding) `net/url` |

*拼接*

strings.Builder 用于高性能字符串拼接

* 它提供了bytes.Buffer方法的子集，可将其安全地避免在将构建器转换为字符串时避免多余的复制
* fmt由于构建器实现了io.Writer接口，因此可以使用该软件包进行格式化
* Grow 当字符串的最大大小已知时，该方法可用于预分配内存

``` go
var b strings.Builder
b.Grow(32)
for i, p := range []int{2, 3, 5, 7, 11, 13} {
    fmt.Fprintf(&b, "%d:%d, ", i+1, p)
}
s := b.String()   // no copying
s = s[:b.Len()-2] // no copying (removes trailing ", ")
fmt.Println(s)
```

*比较*

|  表达式 | 结果  | 注意 |
|  ----  | ----  | ---- | 
| "Japan" == "Japan" | true | 相等 |
| strings.EqualFold("Japan", "JAPAN") | true | UTF-8忽略大小写比较 |
| "Japan" < "japan" | true | 字母顺序比较 |

*长度*

|  表达式 | 结果  | 注意 |
|  ----  | ----  | ---- | 
| len("日") | 3 | 字节长度 |
| utf8.RuneCountInString("日") | 1 | rune长度 `unicode/utf8` |
| utf8.ValidString("日") | true | 是否有效的utf8字符串 `unicode/utf8` |

*索引,子串,迭代*

``` go
// UTF-8
for i, ch := range "Japan 日本" {
    fmt.Printf("%d:%q ", i, ch)
}
// Output: 0:'J' 1:'a' 2:'p' 3:'a' 4:'n' 5:' ' 6:'日' 9:'本'

// byte
s := "Japan 日本"
for i := 0; i < len(s); i++ {
    fmt.Printf("%q ", s[i])
}
// Output: 'J' 'a' 'p' 'a' 'n' ' ' 'æ' '\u0097' '¥' 'æ' '\u009c' '¬'
```

*搜索*

|  表达式 | 结果  | 注意 |
|  ----  | ----  | ---- | 
| strings.Contains("Japan", "abc") | false | 包含字符串abc? |
| strings.ContainsAny("Japan", "abc") | true | 包含字节a或b或c? |
| strings.Count("Banana", "ana") | 1 | ana的非重叠计数 |
| strings.HasPrefix("Japan", "Ja") | true | 前缀是Ja? |
| strings.HasSuffix("Japan", "pan") | true | 后缀是pan? |
| strings.Index("Japan", "abc") | -1 | 子串第一次出现的位置|
| strings.IndexAny("Japan", "abc") | 1 | a或b或c第一次出现的位置 |
| strings.LastIndex("Japan", "abc") | -1 | 子串最后一次出现的位置 |
| strings.LastIndexAny("Japan", "abc") | 3 | a或b或c最后一次出现的位置 |

*替换*

|  表达式 | 结果  | 注意 |
|  ----  | ----  | ---- | 
| strings.Replace("foo", "o", ".", 2) | f.. | 将前2个o替换为. -1代表替换全部 |
| strings.Map(func(r rune) rune {return r+1}, "ab") | bc | 处理每个字节 |
| strings.ToUpper("Japan") | JAPAN | 大写 |
| strings.ToLower("Japan") | japan	 | 小写 |
| strings.Title("ja pan") | Ja Pan | 单词首字母大写 |
| strings.TrimSpace(" foo\n") | foo | 去除开头和结尾的空白 |
| strings.Trim("foo", "fo") |  | 去除开头和结尾的f和o |
| strings.TrimLeft("foo", "f") | oo | 仅开头 |
| strings.TrimRight("foo", "o") | f | 仅结尾 |
| strings.TrimPrefix("foo", "fo") | o |  |
| strings.TrimSuffix("foo", "o") | fo |  |

*切割*

|  表达式 | 结果  | 注意 |
|  ----  | ----  | ---- | 
| strings.Fields(" a\t b\n") | ["a" "b"] | 去掉空白符 |
| strings.Split("a,b", ",") | ["a" "b"] | 去掉分隔符 |
| strings.SplitAfter("a,b", ",") | ["a," "b"] | 保持分隔符 |

*拼接*

|  表达式 | 结果  | 注意 |
|  ----  | ----  | ---- | 
| strings.Join([]string{"a", "b"}, ":") | a:b | 拼接 |
| strings.Repeat("da", 2) | dada | 重复 |

*转换*

|  表达式 | 结果  | 注意 |
|  ----  | ----  | ---- |
| strconv.ParseInt("123", 10, 64) | 123 | 字符串转数字 |
| strconv.FormatInt(255, 16) | "ff" | 十六进制 |
