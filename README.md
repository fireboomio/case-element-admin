## 项目介绍

[case-element-admin](https://github.com/fireboomio/case-element-admin) 是基于 [vue3-element-admin](https://gitee.com/youlaiorg/vue3-element-admin) 改造的使用 `Fireboom` 提供后端API服务的后台管理框架。

## 项目特色

- 基于 `vue-element-admin` 升级的 `Vue3` 版本，主流技术栈，无过度自定义封装，极易上手，减少学习成本
- 配套 `Fireboom` 后台接口，非 `Mock` 数据
- 支持统计查询
- 支持常见的增删改查
- 系统功能：用户、角色、菜单、权限管理
- 基础设施：动态路由，按钮权限，常用组件封装

## 环境要求

- Node 环境

  版本：16+

- 开发工具

  VSCode

- 必装插件

  - Vue Language Features (Volar)
  - TypeScript Vue Plugin (Volar)

## 项目启动

### GitPod 启动
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/fireboomio/case-element-admin)

### 环境准备
```bash
# 安装 pnpm
npm install pnpm -g

# 安装依赖
pnpm install
cd server
sh update.sh
cd custom-ts
pnpm install
cd ../../
```

### 项目开发

```bash
# 在项目根目录
# 第一个 terminal 执行
pnpm run dev

# 在项目根目录
# 第二个 terminal 执行
cd server
# 先执行一次 build，有警告先忽略
./fireboom build
cd custom-ts
pnpm run watch

# 在项目根目录
# 第三个 terminal 执行
cd server
./fireboom dev
```

### 启动后修改

1. 修改身份认证相关配置
2. 修改数据源配置，当前项目中使用 `sqlite` 作为示例数据源

### Prisma 结构

```prisma
model Menu {
  id             Int     @id @default(autoincrement())
  parentId       Int?
  label          String
  path           String
  icon           String?
  sort           Int     @default(0)
  level          Int     @default(1)
  MenuMenuToMenu Menu?   @relation("MenuToMenu", fields: [parentId], references: [id])
  other_Menu     Menu[]  @relation("MenuToMenu")
  Role           Role[]
}

model Post {
  id          Int       @id @default(autoincrement())
  title       String
  poster      String?
  publishedAt DateTime?
  authorId    String
  content     String?
  User        User      @relation(fields: [authorId], references: [id])
}

model Role {
  id     Int     @id @default(autoincrement())
  code   String  @unique
  remark String?
  Menu   Menu[]
  User   User[]
}

model SaleLog {
  id       Int      @id @default(autoincrement())
  shopName String
  day      DateTime
  sales    Float
  typeId   Int
  SaleType SaleType @relation(fields: [typeId], references: [id])
}

model SaleType {
  id        Int       @id @default(autoincrement())
  name      String
  createdAt DateTime  @default(now())
  SaleLog   SaleLog[]
}

model User {
  id        String   @id
  createdAt DateTime @default(now())
  name      String
  avatarUrl String?
  Post      Post[]
  Role      Role[]
}

model VisitLog {
  id        Int      @id @default(autoincrement())
  ip        String
  ua        String
  visitedAt DateTime @default(now())
}
```

### 项目打包

```bash
pnpm run build:prod
```

## 项目部署

参考[官网文档](https://ansons-organization.gitbook.io/product-manual/bu-shu-yun-wei/shou-dong-bu-shu)

## 技术群

![221680846484_.pic.jpg](https://s2.loli.net/2023/04/07/CxEp4Q6b52nKNBi.jpg)
