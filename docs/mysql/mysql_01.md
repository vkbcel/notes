---
title: MySQL 常用语句整理
---

### 用户相关

```sql
CREATE USER 'tc'@'%' IDENTIFIED BY 'password';
GRANT ALL ON database_name.table_name TO 'tc'@'%';
```

### 库相关

```sql
CREATE DATABASE `database_name` DEFAULT CHARACTER SET utf8mb4;
```

### 表相关

```sql
CREATE TABLE `table_name` (
  `id`         int unsigned NOT NULL AUTO_INCREMENT COMMENT 'id',
  `created_at` datetime     DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime     DEFAULT NULL COMMENT '更新时间',
  `deleted_at` datetime     DEFAULT NULL COMMENT '删除时间',
  `user_id`    int unsigned NOT NULL DEFAULT 0 COMMENT '用户id',
  `order_no`   varchar(128) NOT NULL DEFAULT '' COMMENT '订单号',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uidx_order_no` (`order_no`)
) ENGINE = InnoDB ROW_FORMAT = DYNAMIC COMMENT = '表备注';

INSERT INTO `table_name`(`user_id`, `order_no`) VALUES('123', '321');

SHOW COLUMNS FROM `table_name`;
```

### 字段相关

```sql
ALTER TABLE `table_name` ADD  `address` varchar(255) NOT NULL DEFAULT '' COMMENT '地址';
ALTER TABLE `table_name` MODIFY `address` varchar(65535) NOT NULL DEFAULT '' COMMENT '地址';
ALTER TABLE `table_name` CHANGE `address` `address1` varchar(64) NOT NULL DEFAULT '' COMMENT '地址';
ALTER TABLE `table_name` DROP  `address`;
```

### 索引相关

```sql
ALTER TABLE `table_name` ADD INDEX `idx_orderno_userid` (`order_no`， `user_id`);
ALTER TABLE `table_name` ADD UNIQUE INDEX `idx_orderno_userid` (`order_no`， `user_id`);
ALTER TABLE `table_name` DROP INDEX `idx_orderno_userid`;
```
