---
title: 字符串处理[备忘]
---

*转义字符*

* Value: []int64{0, 1}

|  表达式 | 结果  | 注意 |
|  ----  | ----  | ---- | 
| "" |  | 字符串零值 |
| "China 中国" | China 中国 | Unicode |
| "\xe4\xb8\xad" | 中 | UTF-8编码 |
| "\u4e2d" | 中 | Unicode码位 |
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
| "China" == "China" | true | 相等 |
| strings.EqualFold("China", "CHINA") | true | UTF-8忽略大小写比较 |
| "China" < "china" | true | 字母顺序比较 |

*长度*

|  表达式 | 结果  | 注意 |
|  ----  | ----  | ---- | 
| len("中") | 3 | 字节长度 |
| utf8.RuneCountInString("中") | 1 | rune长度 `unicode/utf8` |
| utf8.ValidString("中") | true | 是否有效的utf8字符串 `unicode/utf8` |

*索引,子串,迭代*

``` go
// UTF-8
for i, ch := range "China 中国" {
    fmt.Printf("%d:%q ", i, ch)
}
// Output: 0:'C' 1:'h' 2:'i' 3:'n' 4:'a' 5:' ' 6:'中' 9:'国'

// byte
s := "China 中国"
for i := 0; i < len(s); i++ {
    fmt.Printf("%q ", s[i])
}
// Output: 'C' 'h' 'i' 'n' 'a' ' ' 'ä' '¸' '\u00ad' 'å' '\u009b' '½'
```

*搜索*

|  表达式 | 结果  | 注意 |
|  ----  | ----  | ---- | 
| strings.Contains("China", "abc") | false | 包含字符串abc? |
| strings.ContainsAny("China", "abc") | true | 包含字节a或b或c? |
| strings.Count("Banana", "ana") | 1 | ana的非重叠计数 |
| strings.HasPrefix("China", "Ch") | true | 前缀是Ch? |
| strings.HasSuffix("China", "ina") | true | 后缀是ina? |
| strings.Index("China", "abc") | -1 | 子串第一次出现的位置|
| strings.IndexAny("China", "abc") | 4 | a或b或c第一次出现的位置 |
| strings.LastIndex("China", "abc") | -1 | 子串最后一次出现的位置 |
| strings.LastIndexAny("China", "abc") | 4 | a或b或c最后一次出现的位置 |

*替换*

|  表达式 | 结果  | 注意 |
|  ----  | ----  | ---- | 
| strings.Replace("foo", "o", ".", 2) | f.. | 将前2个o替换为. -1代表替换全部 |
| strings.Map(func(r rune) rune {return r+1}, "ab") | bc | 处理每个字节 |
| strings.ToUpper("China") | CHINA | 大写 |
| strings.ToLower("China") | china	 | 小写 |
| strings.Title("Ch ina") | Ch Ina | 单词首字母大写 |
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
| strings.Join([]string{"a", "b"}, "_") | a_b | 拼接 |
| strings.Repeat("da", 2) | dada | 重复 |

*转换*

|  表达式 | 结果  | 注意 |
|  ----  | ----  | ---- |
| strconv.ParseInt("123", 10, 64) | 123 | 字符串转数字 |
| strconv.FormatInt(255, 16) | "ff" | 十六进制 |
