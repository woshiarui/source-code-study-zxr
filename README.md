# source-code-study-zxr

这是一个原理-源码练习库
This is a principle and source code exercise library

持续更新中
keep on updating...

欢迎大家提出 issues，共同探讨
Welcome everyone to raise issues and discuss together

#### 中文

##### 1.mini-react-render

这是一个仿照 React 官方的 ReactDOM 的 mini 实现

主要内容：在 src/customRenderer.js 中

作用：编写完之后对 render 阶段的 api 更为熟悉，更直观感受到 Reconciler 协调器和 Renderer 渲染器之间如何配合，完成渲染工作的。

运行：npm start

##### 2.mini-fine-grained-renewal

这是一个细粒度更新的 mini 实现

主要内容：在 demo.js 中

作用：更清晰的理解细粒度更新实现原理——发布订阅；理解细粒度更新的优点——无需显示声明依赖和 React Hooks 可以不受“不能在条件语句中声明 Hooks 的限制”

#### English

##### 1.mini-react-render

This is a mini implementation modeled after the React official ReactDOM

Content: In src/customRenderer.js

Effect: After writing the render stage api more familiar, more intuitive feel how to cooperate between the Reconciler coordinator and Renderer renderer, complete rendering work.

Run: npm start

##### 2.mini-fine-grained-renewal

This is a fine-grained update to the mini implementation

content: In demo.js

Effect: A clearer understanding of fine-grained update implementation principles -- publish-subscribe; Understand the benefits of fine-grained updates -- you don't need to show declaration dependencies and React Hooks are free from the "you can't declare Hooks in conditional statements" constraint
