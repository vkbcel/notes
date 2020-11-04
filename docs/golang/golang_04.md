---
title: golang面试题(三)
---
### 1. 括号匹配

``` go
func isValid(s string) bool {
    brackets := map[rune]rune{')': '(', ']': '[', '}': '{'}
    var stack []rune

    for _, char := range s {
        fmt.Println(reflect.TypeOf(char))
        if char == '(' || char == '{' || char == '[' {
            // 入栈
            stack = append(stack, char)
            // 循环中，stack不能为空
        } else if len(stack) > 0 && brackets[char] == stack[len(stack) - 1] {
            // 栈中有数据，且此元素与栈尾元素相同
            stack = stack[:len(stack) - 1]
        } else {
            return false
        }
    }

    // 循环结束，栈中还有数据则 false
    return len(stack) == 0
}
```

### 2. 启动两个线程, 一个输出 1,3,5,7…99, 另一个输出 2,4,6,8…100 最后 STDOUT 中按序输出 1,2,3,4,5…100

``` go
func main() {
signal1 := make(chan struct{}, 1)
signal2 := make(chan struct{}, 1)
wg := sync.WaitGroup{}
wg.Add(2)
go func() {
    for i := 0; i < 50; i++ {
        <- signal1
        fmt.Println(2 * i + 1)
        signal2 <- struct{}{}
    }
    wg.Done()
}()
go func () {
    for i := 0; i < 50; i++ {
        <- signal2
        fmt.Println(2 * i + 2)
        signal1 <- struct{}{}
    }
    wg.Done()
}()
signal1 <- struct{}{}
wg.Wait()
}
```
