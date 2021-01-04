---
title: linux常用命令
---

#### 压缩传输相关

``` shell
# tar
# c 创建归档 归档同时压缩：z gzip类型压缩 j bzip2类型压缩 J xz类型压缩
# x 解开归档 t 查看包中文件 v 压缩过程显示文件 f 指定压缩包名称
# -exclude filename 压缩过程中忽略filename文件
tar czf foobar.tar.gz ./dir # 压缩dir文件夹到foobar.tar.gz
tar xvf foobar.tar.gz # 解压foobar.tar.gz到当前目录
# zip
zip -r foobar.zip ./dir # 压缩dir文件夹到foobar.zip
unzip -d ./ foobar.zip # 解压foobar.zip到当前目录
# rar e 解压到当前目录 x 解压到指定目录
rar a foobar ./dir # 压缩dir文件夹到foobar.rar
unrar e foobar.rar # 解压foobar.rar到当前目录
# scp -r 递归
scp -r ./dir root@192.168.1.56:/dir # 上传
scp username@192.168.1.56:/path/filename  ./ # 下载远端filename到当前文件夹
```

#### 搜索

``` shell
# find
find ./ -name '*.c' # 搜索当前目录下所有后缀为.c的文件
find ./ -iname '*.c' # 忽略大小写搜索当前目录下所有后缀为.c的文件
# locate updatedb 更新
locate /etc/sh # 搜索 etc 目录下所有以 sh 开头的文件
locate -i ./r # 忽略大小写搜索当前目录下所有以 r 开头的文件
```

#### 查找替换

``` shell
# grep
# -c 只输出匹配行的计数 -i 不区分大小写 -l 查询多文件时只输出包含匹配字符的文件名
# -n 显示匹配行及行号 -s 不显示不存在或无匹配文本的错误信息 -v 显示不包含匹配文本的所有行
# -A 向下匹配 -B 向上匹配 -C 向上向下同时匹配
grep -A 2 'test' d* #搜索所有以d开头文件打印所有包含test的行再往下显示2行
# egrep
egrep 'pattern1.*pattern2|pattern2.*pattern1' filename # and
egrep 'pattern1|pattern2' filename # or
# sed
sed 'n1,n2s/one/two/g' filename # file文件中的全局替换one到two
```

#### 网络相关

``` shell
# netstat
# -a 显示所有选项，默认不显示LISTEN相关 -t 仅显示tcp相关选项 -u 仅显示udp相关选项
# -n 拒绝显示别名，能显示数字的全部转化成数字 -l 仅列出有在 Listen (监听) 的服務状态
# -p 显示建立相关链接的程序名 -r 显示路由信息，路由表 -e 显示扩展信息，例如uid等
# -s 按各个协议进行统计 -c 每隔一个固定时间，执行该netstat命令
netstat -ntlp
# ifconfig
ifconfig eth0 192.168.1.2 netmask 255.255.255.0 # 修改IP地址
route add default gw 192.168.1.1 # 修改网关
```

#### 其他

``` shell
# 显示当前目录磁盘占用
du -h -d 1
# 删除指定文件外的其他文件
ls | grep -v keep | xargs rm 
# 十六进制查看文件 在vim中尾行模式
:%!xxd # 查看
:%!xxd -r # 取消查看
# 十六进制查看文件
hexdump -Cv filename
# 查询公网IP
curl ifconfig.me
curl cip.cc
```
