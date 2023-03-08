/*
 * @Descripttion:
 * @version:
 * @Author: ZhengXiaoRui
 * @email: zheng20010712@163.com
 * @Date: 2023-03-08 16:06:11
 * @LastEditors: ZhengXiaoRui
 * @LastEditTime: 2023-03-08 16:41:46
 */
const insertItem = (content) => {
  const ele = document.createElement("span");
  ele.innerText = `${content}`;
  contentBox.appendChild(ele);
};

const work1 = {
  count: 100,
};

//向workList队列插入work
//schedule方法从workList取出work，传递给perform
//perform方法执行完work的所有工作后重复上一步骤

const workList = [];
//上一优先级
let prevPriority = IdlePriority;
//当前正在执行的回调
let curCallback;
function schedule() {
  const cbNode = getFirstCallbackNode();
  const curWork = workListSort((w1, w2) => {
    return w1.priority - w2.priority;
  })[0];
  if (!curWork) {
    curCallback = null;
    cbNode && cancelCallback(cbNode);
    return;
  }
  //获得当前最高优先级work的优先级
  const { priority: curPriority } = curWork;
  //如果优先级相同则退出调度
  if (curPriority === prevPriority) {
    return;
  }
  //准备调度最高优先级的work
  //调度之前先中断当前的工作（如果有）
  cbNode && cancelCallback(cbNode);

  //调度当前最高优先级的work
  curCallback = scheduleCallback(curPriority, perform.bind(null, curWork));
}

function cancelCallback(task) {
  task.callback = null;
}

function perform(work) {
  while (work.count) {
    work.count--;
    insertItem();
  }
  schedule();
}

button.onClick = function () {
  workList.unshift({
    count: 100,
  });
  schedule();
};
