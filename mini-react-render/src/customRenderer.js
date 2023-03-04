/*
 * @Descripttion:
 * @version:
 * @Author: ZhengXiaoRui
 * @email: zheng20010712@163.com
 * @Date: 2023-03-03 21:41:16
 * @LastEditors: ZhengXiaoRui
 * @LastEditTime: 2023-03-04 10:28:14
 */
import ReactReconciler from "react-reconciler";

const hostConfig = {
  //宿主环境的API是否支持Mutation
  supportsMutation: true,

  //初始上下文信息
  getRootHostContext() {
    return {};
  },
  getChildHostContext() {
    return {};
  },

  prepareForCommit() {
    return true;
  },
  resetAfterCommit() {},

  //组件的Children是否为文本节点
  shouldSetTextContent(_, props) {
    return (
      typeof props.children === "string" || typeof props.children === "number"
    );
  },

  //创建DOM元素
  createInstance(
    type,
    newProps,
    rootContainerInstance,
    _currentHostContext,
    workInProgress
  ) {
    const domElement = document.createElement(type);
    Object.keys(newProps).forEach((propName) => {
      const propValue = newProps[propName];
      if (propName === "children") {
        if (typeof propValue === "string" || typeof propName === "number") {
          domElement.textContent = propValue;
        }
      } else if (propName === "className") {
        domElement.setAttribute("class", propValue);
      } else if (propName === "onClick") {
        domElement.addEventListener("click", propValue);
      } else {
        domElement.setAttribute(propName, propValue);
      }
    });
    return domElement;
  },
  createTextInstance(text) {
    return document.createTextNode(text);
  },

  //插入DOM元素——对应placement flag
  appendInitialChild(parent, child) {
    parent.appendChild(child);
  },

  //设置DOM元素属性
  finalizeInitialChildren() {},

  clearContainer() {},
  appendChild(parent, child) {
    parent.appendChild(child);
  },
  appendChildToContainer(parent, child) {
    parent.appendChild(child);
  },
  prepareUpdate(domElement, oldProps, newProps) {
    return true;
  },
  commitUpdate(domElement, updatePayload, type, oldProps, newProps) {
    Object.keys(newProps).forEach((propName) => {
      const propValue = newProps[propName];
      if (propName === "children") {
        if (typeof propValue === "string" || typeof propValue === "number") {
          domElement.textContent = propValue;
        }
      } else {
        domElement.setAttribute(propName, propValue);
      }
    });
  },
  commitTextUpdate(textInstance, oldText, newText) {
    textInstance.text = newText;
  },

  //删除子DOM元素——对应ChildDeletion flag
  removeChild(parentInstance, child) {
    parentInstance.removeChild(child);
  },
};

const ReactReconcilerInst = ReactReconciler(hostConfig);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  render: (reactElement, domElement, callback) => {
    if (!domElement._rootContainer) {
      domElement._rootContainer = ReactReconcilerInst.createContainer(
        domElement,
        false
      );
    }
    return ReactReconcilerInst.updateContainer(
      reactElement,
      domElement._rootContainer,
      null,
      callback
    );
  },
};
