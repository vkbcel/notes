---
title: win10安装linux子系统(WSL)
---

win10安装子系统并使用vscode进行远程开发

#### 官方文档链接

[适用于 Linux 的 Windows 子系统安装指南 (Windows 10)](https://docs.microsoft.com/zh-cn/windows/wsl/install-win10)

[使用适用于 Linux 的 Windows 子系统的 Visual Studio Code 入门](https://docs.microsoft.com/zh-cn/windows/wsl/tutorials/wsl-vscode)

#### 开机自启动ssh、docker

``` shell
wsl -d Ubuntu-20.04 -u root /etc/init.d/ssh start
wsl -d Ubuntu-20.04 -u root /etc/init.d/docker start
```

WSL发行版名字可以通过  `wsl -l` 查看

#### WSL使用代理

由于每次启动WSL的IP都会改变，设置代理可以通过以下设置，写入~/.bashrc使其永久生效

``` shell
alias sp="export all_proxy=http://$(cat /etc/resolv.conf |grep "nameserver" |cut -f 2 -d " "):7890"
alias up="unset all_proxy"
```

#### 注意事项

1. 子系统存储在C盘，路径：

``` shell
C:\Users\用户名\AppData\Local\Packages\CanonicalGroupLimited.Ubuntu20.04onWindows_79rhkp1fndgsc\LocalState
```

2. windows的磁盘被挂载在子系统/mnt下，可以直接访问

3. wsl文件系统访问共享文件夹(/mnt)有io性能问题

4. wsl和win10共用localhost和端口
