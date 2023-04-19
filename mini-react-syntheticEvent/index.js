/*
 * @Descripttion:
 * @version:
 * @Author: ZhengXiaoRui
 * @email: zheng20010712@163.com
 * @Date: 2023-04-19 22:49:50
 * @LastEditors: ZhengXiaoRui
 * @LastEditTime: 2023-04-19 23:02:56
 */
class SyntheticEvent {
  constructor(e) {
    this.nativeEvent = e;
  }
  stopPropagation() {
    this._stopPropagation = true;
    if (this.nativeEvent.stopPropagation) {
      //调用原生事件的stopPropagation方法
      this.nativeEvent.stopPropagation();
    }
  }
}

//实现事件传播机制
//1.在根元素绑定事件类型对应的事件回调，所有子孙元素触发该类型事件最终都会委托给 应用根元素的事件回调处理
//2.寻找触发事件的DOM元素，找到对应的fiberNode
//3.收集从当前fiberNode到HostRootFiber之间 所有注册的该事件的回调函数
//4.反向遍历并执行一遍收集到的所有回调函数——捕获
//5.正向遍历并执行一遍收集到的所有回调函数——冒泡

const addEvent = (container, type) => {
  container.addEventListener(type, (e) => {
    dispatchEvent(e, type.toUpperCase(), container);
  });
};

const root = document.querySelector("#root");
ReactDom.createRoot(root).render(jsx);
addEvent(root, "click");

const dispatchEvent = (e, type) => {
  //包装合成事件
  const se = new SyntheticEvent(e);
  const ele = e.target;

  //通过DOM元素找到对应的fiber
  let fiber;
  for (let prop in ele) {
    if (prop.toLowerCase().includes("fiber")) {
      fiber = ele[prop];
    }
  }
  //收集路径中 该事件的所有回调函数
  const paths = collectPaths(type, fiber);

  //捕获
  triggerEventFlow(paths, type + "CAPTURE", se);

  //冒泡
  if (!se._stopPropagation) {
    triggerEventFlow(paths.reverse(), type, se);
  }
};
