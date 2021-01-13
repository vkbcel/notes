---
title: 正则表达式[备忘]
---

#### 基础

正则表达式 `a.b` 匹配任意满足以a开头b结尾中间包含单个字符的字符串，点匹配单子任意字符

要检查是否有子字符串匹配 `a.b` 使用 `regexp.MatchString` 函数

``` go
matched, err := regexp.MatchString(`a.b`, "aaxbb")
fmt.Println(matched) // true
fmt.Println(err)     // nil (regexp is valid)
```

要检查整个字符串是否匹配 `a.b` ，请锚定正则表达式的开头和结尾

* 插入符 `^` 与文本或行的开头匹配
* 美元符号 `$` 与文本的结尾匹配

``` go
matched, _ := regexp.MatchString(`^a.b$`, "aaxbb")
fmt.Println(matched) // false
```

*编译*

对于更复杂的查询，应该编译正则表达式来创建一个Regexp对象。有两种选择：

``` go
re1, err := regexp.Compile(`regexp`) // error if regexp invalid
re2 := regexp.MustCompile(`regexp`)  // panic if regexp invalid
```

#### 备忘

[RE2](https://github.com/google/re2/wiki/Syntax)

*复合*

|  正则表达式 | 含义 |
|  ----  | ---- |
| xy | xy |
| x|y | x或y,优先x |
| xy|z | (xy)|z |
| xy* | x(y*) |

*重复（贪婪和非贪婪）*

|  正则表达式 | 含义 |
|  ----  | ---- |
| x* | 零个或多个x，贪婪 |
| x*? | 零个或多个x，非贪婪 |
| x+ | 一个或多个x，贪婪 |
| x+? | 一个或多个x，非贪婪 |
| x? | 零个或一个x，贪婪 |
| x?? | 零个或一个x，非贪婪 |
| x{n} | 严格匹配n个x |
| x{n,m} | 匹配n到m个x，贪婪 |
| x{n,m}? | 匹配n到m个x，贪婪 |
| x{n,} | 匹配n个或多于n个x，非贪婪 |
| x{n,}? | 匹配n个或多于n个x，非贪婪 |

*分组*

|  正则表达式 | 含义 |
|  ----  | ---- |
| (子表达式) | 被捕获的组，该组被编号 (子匹配) |
| (?P<命名>子表达式) | 被捕获的组，该组被编号且被命名 (子匹配) |
| (?:子表达式) | 非捕获的组 (子匹配) |
| (?标记) | 在组内设置标记，非捕获，标记影响当前组后的正则表达式 |
| (?标记:子表达式) | 在组内设置标记，非捕获，标记影响当前组内的子表达式 |

标记语法：
* xyz  (设置 xyz 标记)
* -xyz (清除 xyz 标记)
* xy-z (设置 xy 标记, 清除 z 标记)
  
可以设置的标记有：

|  正则表达式 | 含义 |
|  ----  | ---- |
| i | 不区分大小写 |
| m | 让^和$匹配整个文本的开头和结尾，而非行首和行尾（多行模式） |
| s | 让.匹配\n（单行模式） |
| U | 非贪婪模式：交换x*和x*?等的含义 |

默认都为false

例如 前缀`"(?is)"`使匹配的字符不区分大小写，并让`.`匹配`\n`。（默认匹配区分大小写，`.`不匹配`\n`）

*角色类*

|  字符类 | 含义 |
|  ----  | ---- |
| . | 任意字符 |
| [ab] | 字符a或b |
| [^ab] | 除a或b以外的任何字符 |
| [a-z] | a到z的任意字符 |
| [a-z0-9] | a到z或0-9的任意字符 |

|  Perl 类 | 含义 |
|  ----  | ---- |
| \d | 任意数字,等价[0-9] |
| \D | 非数字 |
| \s | 空白字符： [\t\n\f\r ] |
| \S | 非空白字符： [^\t\n\f\r ] |
| \w | 等价[0-9A-Za-z_] |
| \W | 等价[^0-9A-Za-z_] |

|  ASCII 类 | 含义 |
|  ----  | ---- |
|  [:alnum:]  | 字母数字 等价[0-9A-Za-z] |
|  [:alpha:]  | 字母 等价[A-Za-z] |
|  [:ascii:]  | ASCII字符集 等价[\x00-\x7F] |
|  [:blank:]  | 空白占位符 等价[\t ] |
|  [:cntrl:]  | 控制字符 等价[\x00-\x1F\x7F] |
|  [:digit:]  | 数字 等价[0-9] |
|  [:graph:]  | 图形字符 等价[!-~] |
|  [:lower:]  | 小写字母 等价[a-z] |
|  [:print:]  | 可打印字符 等价[ -~] |
|  [:punct:]  | 标点符号 等价[!-/:-@[-`{-~] |
|  [:space:]  | 空白字符 等价[\t\n\v\f\r ] |
|  [:upper:]  | 大写字母 等价[A-Z] |
|  [:word:]   | 单词字符 等价[0-9A-Za-z_] |
|  [:xdigit:] | 十六进制字符集 等价[0-9A-Fa-f] |

Unicode 类 共四种表达式

* `\p{Greek}` 匹配Unicode
* `\pN` 匹配Unicode
* `\P{Greek}` 匹配Unicode（取反）等价[^\p{Greek}]
* `\PN` 匹配Unicode（取反）

|  Unicode 类 | 含义 |
|  ----  | ---- |
| \p{Han} | 匹配Unicode 汉字 |
| \P{Han} | 匹配Unicode 汉字外其他字符 |

*特殊角色*

要从字面上匹配特殊字符 \^$.|?*+-[]{}()，请使用反斜杠将其转义。例如，\{匹配左括号符号。

|  正则表达式 | 含义 |
|  ----  | ---- |
| \t | 水平制表符 \011 |
| \n | 换行符 \012 |
| \f | 换页 \014 |
| \r | 回车 \015 |
| \v | 垂直制表符 \013 |
| \123 | 八进制字符代码（最多三位数） |
| \x7F | 十六进制字符代码（恰好两位数） |

*文字边界锚点*

|  正则表达式 | 含义 |
|  ----  | ---- |
| ^ | 如果标记 m=true 则匹配行首，否则匹配整个文本的开头（m 默认为 false） |
| $ | 如果标记 m=true 则匹配行尾，否则匹配整个文本的结尾（m 默认为 false） |
| \A | 匹配整个文本的开头，忽略 m 标记 |
| \z | 匹配整个文本的结尾，忽略 m 标记 |
| \b | 匹配ASCII边界 |
| \B | 匹配非ASCII边界 |

#### 代码示例

使用FindString方法查找第一个匹配项的文本。如果不匹配，则返回值为空字符串。

``` go
re := regexp.MustCompile(`foo.?`) // 非贪婪
fmt.Printf("%q\n", re.FindString("seafood fool")) // "food"
fmt.Printf("%q\n", re.FindString("meat"))         // ""
```

使用FindAllString方法查找所有匹配项的文本。返回值nil表示不匹配。

``` go
re := regexp.MustCompile(`a.`)
fmt.Printf("%q\n", re.FindAllString("paranormal", -1)) // ["ar" "an" "al"]
fmt.Printf("%q\n", re.FindAllString("paranormal", 2))  // ["ar" "an"]
fmt.Printf("%q\n", re.FindAllString("graal", -1))      // ["aa"]
fmt.Printf("%q\n", re.FindAllString("none", -1))       // [] (nil slice)
```

使用ReplaceAllString方法替换所有匹配项的文本。返回一个副本，替换正则表达式的所有匹配项。

``` go
re := regexp.MustCompile(`ab*`)
fmt.Printf("%q\n", re.ReplaceAllString("-a-abb-", "T")) // "-T-T-"
```

使用Split方法将字符串切成由正则表达式分隔的子字符串。它返回这些表达式匹配之间的子字符串的一部分。返回值nil表示不匹配。

``` go
a := regexp.MustCompile(`a`)
fmt.Printf("%q\n", a.Split("banana", -1)) // ["b" "n" "n" ""]
fmt.Printf("%q\n", a.Split("banana", 0))  // [] (nil slice)
fmt.Printf("%q\n", a.Split("banana", 1))  // ["banana"]
fmt.Printf("%q\n", a.Split("banana", 2))  // ["b" "nana"]

zp := regexp.MustCompile(`z+`)
fmt.Printf("%q\n", zp.Split("pizza", -1)) // ["pi" "a"]
fmt.Printf("%q\n", zp.Split("pizza", 0))  // [] (nil slice)
fmt.Printf("%q\n", zp.Split("pizza", 1))  // ["pizza"]
fmt.Printf("%q\n", zp.Split("pizza", 2))  // ["pi" "a"]
```

综合示例

``` go
func main() {
	text := `Hello 世界！123 Go.`

	// 查找连续的小写字母
	reg := regexp.MustCompile(`[a-z]+`)
	fmt.Printf("%q\n", reg.FindAllString(text, -1))
	// ["ello" "o"]

	// 查找连续的非小写字母
	reg = regexp.MustCompile(`[^a-z]+`)
	fmt.Printf("%q\n", reg.FindAllString(text, -1))
	// ["H" " 世界！123 G" "."]

	// 查找连续的单词字母
	reg = regexp.MustCompile(`[\w]+`)
	fmt.Printf("%q\n", reg.FindAllString(text, -1))
	// ["Hello" "123" "Go"]

	// 查找连续的非单词字母、非空白字符
	reg = regexp.MustCompile(`[^\w\s]+`)
	fmt.Printf("%q\n", reg.FindAllString(text, -1))
	// ["世界！" "."]

	// 查找连续的大写字母
	reg = regexp.MustCompile(`[[:upper:]]+`)
	fmt.Printf("%q\n", reg.FindAllString(text, -1))
	// ["H" "G"]

	// 查找连续的非 ASCII 字符
	reg = regexp.MustCompile(`[[:^ascii:]]+`)
	fmt.Printf("%q\n", reg.FindAllString(text, -1))
	// ["世界！"]

	// 查找连续的标点符号
	reg = regexp.MustCompile(`[\pP]+`)
	fmt.Printf("%q\n", reg.FindAllString(text, -1))
	// ["！" "."]

	// 查找连续的非标点符号字符
	reg = regexp.MustCompile(`[\PP]+`)
	fmt.Printf("%q\n", reg.FindAllString(text, -1))
	// ["Hello 世界" "123 Go"]

	// 查找连续的汉字
	reg = regexp.MustCompile(`[\p{Han}]+`)
	fmt.Printf("%q\n", reg.FindAllString(text, -1))
	// ["世界"]

	// 查找连续的非汉字字符
	reg = regexp.MustCompile(`[\P{Han}]+`)
	fmt.Printf("%q\n", reg.FindAllString(text, -1))
	// ["Hello " "！123 Go."]

	// 查找 Hello 或 Go
	reg = regexp.MustCompile(`Hello|Go`)
	fmt.Printf("%q\n", reg.FindAllString(text, -1))
	// ["Hello" "Go"]

	// 查找行首以 H 开头，以空格结尾的字符串
	reg = regexp.MustCompile(`^H.*\s`)
	fmt.Printf("%q\n", reg.FindAllString(text, -1))
	// ["Hello 世界！123 "]

	// 查找行首以 H 开头，以空白结尾的字符串（非贪婪模式）
	reg = regexp.MustCompile(`(?U)^H.*\s`)
	fmt.Printf("%q\n", reg.FindAllString(text, -1))
	// ["Hello "]

	// 查找以 hello 开头（忽略大小写），以 Go 结尾的字符串
	reg = regexp.MustCompile(`(?i:^hello).*Go`)
	fmt.Printf("%q\n", reg.FindAllString(text, -1))
	// ["Hello 世界！123 Go"]

	// 查找 Go.
	reg = regexp.MustCompile(`\QGo.\E`)
	fmt.Printf("%q\n", reg.FindAllString(text, -1))
	// ["Go."]

	// 查找从行首开始，以空格结尾的字符串（非贪婪模式）
	reg = regexp.MustCompile(`(?U)^.* `)
	fmt.Printf("%q\n", reg.FindAllString(text, -1))
	// ["Hello "]

	// 查找以空格开头，到行尾结束，中间不包含空格字符串
	reg = regexp.MustCompile(` [^ ]*$`)
	fmt.Printf("%q\n", reg.FindAllString(text, -1))
	// [" Go."]

	// 查找“单词边界”之间的字符串
	reg = regexp.MustCompile(`(?U)\b.+\b`)
	fmt.Printf("%q\n", reg.FindAllString(text, -1))
	// ["Hello" " 世界！" "123" " " "Go"]

	// 查找连续 1 次到 4 次的非空格字符，并以 o 结尾的字符串
	reg = regexp.MustCompile(`[^ ]{1,4}o`)
	fmt.Printf("%q\n", reg.FindAllString(text, -1))
	// ["Hello" "Go"]

	// 查找 Hello 或 Go
	reg = regexp.MustCompile(`(?:Hell|G)o`)
	fmt.Printf("%q\n", reg.FindAllString(text, -1))
	// ["Hello" "Go"]

	// 查找 Hello 或 Go，替换为 Hellooo、Gooo
	reg = regexp.MustCompile(`(?PHell|G)o`)
	fmt.Printf("%q\n", reg.ReplaceAllString(text, "${n}ooo"))
	// "Hellooo 世界！123 Gooo."

	// 交换 Hello 和 Go
	reg = regexp.MustCompile(`(Hello)(.*)(Go)`)
	fmt.Printf("%q\n", reg.ReplaceAllString(text, "$3$2$1"))
	// "Go 世界！123 Hello."

	// 特殊字符的查找
	reg = regexp.MustCompile(`[\f\t\n\r\v\123\x7F\x{10FFFF}\\\^\$\.\*\+\?\{\}\(\)\[\]\|]`)
	fmt.Printf("%q\n", reg.ReplaceAllString("\f\t\n\r\v\123\x7F\U0010FFFF\\^$.*+?{}()[]|", "-"))
}
```

按照命名模式有16个功能

``` shell
    查找（全部）？（字符串）？（子匹配项）？（索引）？
```

例如：Find，FindAllString，FindStringIndex，...

* 如果All存在，则函数匹配连续的非重叠匹配
* String表示参数为字符串；否则，它是一个字节切片
* 如果Submatch存在，则返回值是连续子匹配的切片。子匹配是正则表达式中带括号的子表达式的匹配。请参阅FindSubmatch示例
* 如果Index存在，则匹配项和子匹配项由字节索引对标识