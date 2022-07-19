// ==UserScript==
// @name         youtube downloader (use y2mate)
// @namespace    https://github.com/jinjieup-resource/tempermonkey
// @version      0.1.3
// @description  use y2mate.is to download youtube videos
// @author       jinjieup-resource
// @license      MIT
// @match        https://www.youtube.com/watch?v=*
// @match        https://*.y2mate.is/*
// @require           https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
// @grant             unsafeWindow
// @grant             GM_openInTab
// @grant             GM.openInTab
// @grant             GM_getValue
// @grant             GM.getValue
// @grant             GM_setValue
// @grant             GM.setValue
// @grant             GM_xmlhttpRequest
// @grant             GM.xmlHttpRequest
// @grant             GM_registerMenuCommand
// @updateURL https://raw.githubusercontent.com/jinjieup-resource/tempermonkey/main/youtube.js
// @downloadURL https://raw.githubusercontent.com/jinjieup-resource/tempermonkey/main/youtube.js
// ==/UserScript==
(function () {
  "use strict";
  if (window.location.href.indexOf("watch?v=") > -1) {
    // 获取当前页链接
    var url = window.location.href;
    // 创建一个红色的长方形按钮
    var button = document.createElement("button");
    button.innerHTML = "下载";
    button.style.backgroundColor = "red";
    button.style.color = "white";
    button.style.border = "none";
    button.style.padding = "5px";
    button.style.fontSize = "12px";
    button.style.position = "fixed";
    button.style.bottom = "10px";
    button.style.right = "10px";
    button.style.cursor = "pointer";
    button.style.zIndex = "9999";
    button.onclick = function () {
      // 打开新标签页
      GM_openInTab("https://y2mate.is/?url=" + url);
    }
  }
})();
