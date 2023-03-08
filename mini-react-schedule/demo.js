/*
 * @Descripttion:
 * @version:
 * @Author: ZhengXiaoRui
 * @email: zheng20010712@163.com
 * @Date: 2023-03-08 16:06:11
 * @LastEditors: ZhengXiaoRui
 * @LastEditTime: 2023-03-08 16:11:14
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

function schedule() {
  const curWork = workList.pop();

  if (curWork) {
    perform(curWork);
  }
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
