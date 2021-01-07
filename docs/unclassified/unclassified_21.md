---
title: docker使用问题汇总
---

#### 代理

``` shell
# ubuntu
vim /etc/default/docker
DOCKER_OPTS="--registry-mirror=https://mirror.ccs.tencentyun.com"
```
