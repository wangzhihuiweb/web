# 创建vue项目
```
npm init vue  TypeScript yes  JSX yes Router yes Pinia yes Testing no ESLint no
```

# submodule（之模块） 技术 先提交libcommon，再提交外部
```
在src 添加公用的之模块项目  git submodule add git@github.com:wangzhihuiweb/libcommon.git
```

```
assets(assets)、interface(接口)、core(核心)、basic(基本)、utils(公用)、theme(主题)、layout(主题架构) 
```
##### env.d.ts 对环境变量声明扩充