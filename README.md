## 说明
    毕业设计选导师系统 vue3  无后端 数据存储在pinia下 mock仅仅用来验证用户信息并根据用户角色分配路由
#### 基本功能

模拟若干学生：姓名，学号  
模拟若干教师：姓名，工号，带学生总数，已选学生数  
学号/工号为登录账号密码  
登录后，账号密码相同时，弹出警告框提示修改密码，可忽略  
登录后，可修改密码  
登录后，从header role辨识角色身份，路由不同组件  
mock不同学生/教师账号演示  

#### 学生

学生显示教师列表，包括：姓名，带学生总数，当前已选学生数；名额已满教师可见但无法选择  
选择教师后弹出最终确认框提交，教师已选学生数+1；  
已选学生再次登录，不再加载教师列表，仅显示选择教师姓名。mock数据即可    

#### 教师  
显示选择自己的学生列表  


# select

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
