## 动机

在开发 sketch 插件的过程中，需要通过使用 webView 的方式来开发，但是官方并没有给出具体教程，让刚刚接触这种开发模式的人会走很多弯路。在开发的过程中，笔者采用官方提供的最新工具包，但是遇到"在 webView 内发送请求后 sketch 闪退"的问题，官方维护人员也没有提供回应。通过将一些依赖降回旧版本，才解决了这个问题。

## 项目依赖
- @skpm/builder@0.5.12
- sketch-module-web-view@0.2.6
- umi@2.x

sketch-module-web-view 目前最新的版本为 2.x，但是因为上述 BUG 故采用了 0.2.6 版本，使用方法详见[文档](./docs/sketch-module-web-view)。前端框架采用的是 umi ——不做任何限制——可以替换成任一自己熟悉的。

## 相关文档

- [Manifest.json: 包含插件，其命令和资源的元数据配置文件](https://developer.sketchapp.com/guides/plugin-bundles/#manifest)

- [Javascript API for Sketch](https://developer.sketchapp.com/reference/api/)

- [WebKit webView lifecycle](https://developer.apple.com/documentation/webkit/webframeloaddelegate?preferredLanguage=occ)

- [skpm: sketch 插件开发工具箱](https://github.com/skpm/skpm)