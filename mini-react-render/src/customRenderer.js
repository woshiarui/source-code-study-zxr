/*
 * @Descripttion:
 * @version:
 * @Author: ZhengXiaoRui
 * @email: zheng20010712@163.com
 * @Date: 2023-03-03 21:41:16
 * @LastEditors: ZhengXiaoRui
 * @LastEditTime: 2023-03-03 22:50:48
 */
import ReactReconciler from "react-reconciler";

const hostConfig = {
  supportsMutation: true,
  getRootHostContext() {},
  getChildHostContext() {},
  prepareForCommit() {},
  resetAfterCommit() {},
  shouldSetTextContent() {},
  createInstance() {},
  createTextInstance() {},
  appendInitialChild() {},
  finalizeInitialChildren() {},
  clearContainer() {},
  appendChild() {},
  appendChildToContainer() {},
  prepareUpdate() {},
  commitUpdate() {},
  commitTextUpdate() {},
  removeChild() {},
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
