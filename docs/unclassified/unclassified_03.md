---
title: linux使用问题汇总
---


#### 解决nvm安装的node使用sudo npm报错的问题

``` shell
sudo ln -s "$NVM_DIR/versions/node/$(nvm version)/bin/node" "/usr/local/bin/node"
sudo ln -s "$NVM_DIR/versions/node/$(nvm version)/bin/npm" "/usr/local/bin/npm"
sudo ln -s "$NVM_DIR/versions/node/$(nvm version)/bin/yarn" "/usr/local/bin/yarn"
```
#### 查看内核和应用的所有日志

``` shell
journalctl
```

#### openssh私钥转rsa私钥

``` shell
ssh-keygen -p -m PEM -f ~/.ssh/id_rsa
```

#### 添加用户username到sudo组

``` shell
sudo usermod -aG sudo username
```

#### npm error: permission denied, mkdir

``` shell
npm install --unsafe-perm
```

#### SSH config配置文件

``` shell
vim ~/.ssh/config

Host    别名
    HostName        主机名
    Port            端口
    User            用户名
    IdentityFile    密钥文件的路径
# example
Host        cjb
    HostName        192.168.85.2
    Port            22
    User            www
    IdentityFile    ~/.ssh/id_rsa
# 解决报错：Permissions 0644 for '/root/.ssh/id_rsa' are too open
chmod 0600 /root/.ssh/id_rsa
# 登录命令
ssh cjb
```
