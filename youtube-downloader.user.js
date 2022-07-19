// ==UserScript==
// @name         youtube-downloader
// @namespace    youtube-downloader
// @version      0.1.0
// @description  use y2mate.is to download youtube videos
// @author       jinjieup-resource
// @license      MIT
// @match        https://www.youtube.com/watch?v=*
// @updateURL    https://raw.githubusercontent.com/jinjieup-resource/tempermonkey/main/youtube-downloader.user.js
// @downloadURL  https://raw.githubusercontent.com/jinjieup-resource/tempermonkey/main/youtube-downloader.user.js
// @grant        GM_openInTab
// ==/UserScript==
(function () {
  "use strict";
  if (window.location.href.indexOf("watch?v=") != -1) {
    let btn = document.createElement("button");
    btn.innerHTML = "下载视频";
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.padding = "5px";
    btn.style.fontSize = "12px";
    btn.style.position = "fixed";
    btn.style.bottom = "10px";
    btn.style.right = "10px";
    window.onload = function () {
      let sub_btn = document.querySelector("#subscribe-button");
      sub_btn.parentElement.insertBefore(btn, sub_btn);
      btn.onclick = function () {
        GM_openInTab("https://y2mate.is/?url=" + window.location.href);
      }
    }
  }
})();