/*
 * @Descripttion:
 * @version:
 * @Author: ZhengXiaoRui
 * @email: zheng20010712@163.com
 * @Date: 2023-03-03 21:06:05
 * @LastEditors: ZhengXiaoRui
 * @LastEditTime: 2023-03-03 22:32:49
 */
import React from "react";
// import ReactDOM from "react-dom/client";
import customRenderer from "./customRenderer";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

customRenderer.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
