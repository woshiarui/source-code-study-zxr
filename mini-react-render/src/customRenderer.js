import ReactReconciler from "react-reconciler";

const hostConfig = {};

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
