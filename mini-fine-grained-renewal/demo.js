/*
 * @Descripttion:
 * @version:
 * @Author: ZhengXiaoRui
 * @email: zheng20010712@163.com
 * @Date: 2023-03-05 12:40:33
 * @LastEditors: ZhengXiaoRui
 * @LastEditTime: 2023-03-05 13:02:26
 */
/**
 * @title : mini细粒度更新
 * @author:小码大哈学习
 * 因为相对擅长React，所以用React的api名称来练习细粒度更新（本身React并没有这个功能）
 */

const effectStack = [];

function subscribe(effect, subscribers) {
  //建立发布订阅关系
  subscribers.add(effect);
  effect.deps.add(subscribers);
}

function useState(value) {
  const subscribers = new Set();
  const getter = () => {
    //获取当前上下文的effect
    const effect = effectStack[effectStack.length - 1];
    if (effect) {
      subscribe(effect, subscribers);
    }
    return value;
  };
  const setter = (nextValue) => {
    value = nextValue;
    for (const effect of [...subscribers]) {
      effect.execute();
    }
  };

  return [getter, setter];
}

function cleanup(effect) {
  for (const subscribers of effect.deps) {
    subscribers.delete(effect);
  }
  effect.deps.clear();
}

function useEffect(callback) {
  const execute = () => {
    //重置依赖
    cleanup(effect);
    effectStack.push(effect);
    try {
      callback();
    } finally {
      effectStack.pop();
    }
  };
  const effect = {
    //用于执行useEffect的回调函数
    execute,
    //保存该useEffect依赖的state对应的subs集合
    deps: new Set(),
  };
  execute();
}

function useMemo(callback) {
  const [s, set] = useState();
  //首次执行callback，建立回调中state的发布订阅关系
  useEffect(() => set(callback()));
  return s;
}
