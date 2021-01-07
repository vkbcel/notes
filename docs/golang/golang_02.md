---
title: golang代码片段[备忘]
---

``` go
// 实现http.server服务
package main

import (
    "fmt"
    "log"
    "net/http"
)

func main() {
    fmt.Println("Serving files in the current directory on port 8000")
    http.Handle("/", http.FileServer(http.Dir(".")))
    err := http.ListenAndServe(":8000", nil)
    if err != nil {
        log.Fatal("ListenAndServe: ", err)
    }
}
```

``` go
// uint32 转 ip
func UInt32ToIP(intIP uint32) net.IP {
    var bytes [4]byte
    bytes[0] = byte(intIP & 0xFF)
    bytes[1] = byte((intIP >> 8) & 0xFF)
    bytes[2] = byte((intIP >> 16) & 0xFF)
    bytes[3] = byte((intIP >> 24) & 0xFF)
 
    return net.IPv4(bytes[3], bytes[2], bytes[1], bytes[0])
}

// ip 转 uint32
func IPToUInt32(ipnr net.IP) uint32 {
    bits := strings.Split(ipnr.String(), ".")
 
    b0, _ := strconv.Atoi(bits[0])
    b1, _ := strconv.Atoi(bits[1])
    b2, _ := strconv.Atoi(bits[2])
    b3, _ := strconv.Atoi(bits[3])
 
    var sum uint32
 
    sum += uint32(b0) << 24
    sum += uint32(b1) << 16
    sum += uint32(b2) << 8
    sum += uint32(b3)
 
    return sum
}
```

``` go
// 打印函数运行时间
func foo() {
    defer duration(track("foo"))
    // Code to measure
}

func track(msg string) (string, time.Time) {
    return msg, time.Now()
}

func duration(msg string, start time.Time) {
    log.Printf("%v: %v\n", msg, time.Since(start))
}
```

``` go
// 时区转换
var CstSh, _ = time.LoadLocation("Asia/Shanghai")

func TimeIn(t time.Time, sh *time.Location) (date string) {
	return t.In(sh).Format("2006-01-02 15-04-05")
}

TimeIn(time.Now(), CstSh)
```
