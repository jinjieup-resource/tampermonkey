// ==UserScript==
// @name         youtube downloader (use y2mate)
// @namespace    https://github.com/jinjieup-resource/tempermonkey
// @version      0.1.1
// @description  use y2mate.is to download youtube videos
// @author       jinjieup-resource
// @license      MIT
// @match        https://www.youtube.com/watch?v=*
// @match        https://*.y2mate.is/*
// @require      https://cdn.staticfile.org/jquery/3.4.1/jquery.min.js
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_setClipboard
// @grant GM_log
// @grant GM_xmlhttpRequest
// @grant unsafeWindow
// @grant window.close
// @grant window.focus
// @updateURL https://raw.githubusercontent.com/jinjieup-resource/tempermonkey/main/youtube.js
// ==/UserScript==
(function() {
  'use strict';
  if (window.location.href.indexOf("watch?v=") > -1) {
    // var button = document.createElement("button"); //创建一个按钮
    // button.textContent = "下载Video"; //按钮内容
    // button.style.width = "50px"; //按钮宽度
    // button.style.height = "2.8rem"; //按钮高度
    // button.style.align = "center"; //文本居中
    // button.style.color = "white"; //按钮文字颜色
    // button.style.background = "#e33e33"; //按钮底色
    // button.style.border = "1px solid #e33e33"; //边框属性
    // button.style.borderRadius = "4px"; //按钮四个角弧度
    var buttonDiv = document.createElement("span");
    buttonDiv.id = "punisher";
    buttonDiv.style.width = "100%";
    buttonDiv.style.marginTop = "3px";
    buttonDiv.style.padding = "10px 0";
    var addButton = document.createElement("a");
    addButton.appendChild(document.createTextNode("下载视频"));
    addButton.style.width = "100%";
    addButton.style.cursor = "pointer";
    addButton.style.height = "inherit";
    addButton.style.backgroundColor = "#393939";
    addButton.style.color = "#ffffff";
    addButton.style.padding = "10px 22px";
    addButton.style.margin = "0px 0px";
    addButton.style.border = "0";
    addButton.style.borderRadius = "2px";
    addButton.style.fontSize = "1.4rem";
    addButton.style.fontFamily = "inherit";
    addButton.style.textAlign = "center";
    addButton.style.textDecoration = "none";
    addButton.href = "//yt1s.com/en/youtube-to-mp3?q=" + encodeURIComponent(location.href);
    addButton.target = "_blank";
    buttonDiv.appendChild(addButton);
    var targetElement = document.querySelectorAll("[id='subscribe-button']");
    buttonDiv.addEventListener("click", clickBotton) //监听按钮点击事件
    var video_id = window.location.href.split("watch?v=")[1]; //获取视频id
    var video_url = "https://www.youtube.com/watch?v=" + video_id; //视频链接
    function clickBotton(){
      window.open("https://y2mate.is/", "_blank"); //新窗口打开y2mate.is
      setTimeout(function(){
        var input = document.querySelector("#txtUrl"); //获取输入框
        input.value = video_url; //输入视频链接
        var btn = document.querySelector("#btnSubmit"); //获取提交按钮
        btn.click(); //点击提交按钮
      } ,100);
    }
    var bar = document.getElementsById("title"); //获取标题栏
    bar.appendChild(button); //按钮添加到页面
  }
} )();