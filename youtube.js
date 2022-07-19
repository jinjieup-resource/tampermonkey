// ==UserScript==
// @name         youtube downloader (use y2mate)
// @namespace    https://github.com/jinjieup-resource/tempermonkey
// @version      0.1.2
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
// ==/UserScript==
(function () {
  "use strict";
  if (window.location.href.indexOf("watch?v=") > -1) {
    var iconVideo =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADOUlEQVRoQ+2Zz4uNURjHP9+F8g8gykKJNJMUUmzMDKZmYVYsLBRhOaEmFhRRLCZDY4PBrJRREkUMmY3URCk/s6GMhR9ZWNk9OvXO7b133ve+57w/7szUnLqbe59fn/Oc85znnCvm+NAcj595gHgGzWwDsBZYDawEFgI/gT/AR0nDZWe8lAyYWTewF9iTEeA4MCTpblkghQHM7BxwPDCgAUn9gTqJ4oUAzOwKcChnICOS9uXUranlBjCza8CBggFclHSkiI1cAGbWBTwt4jim2y3pSV5bwQBmtgq4BazP67RB7w3gsvAX+CbpV4hdL4CoPG4H3KcjxEEOWVdyHwPjkq5m6WcCmNmFaIaybFXx+2vgsqSRNOOpAGa2GHhY4lIpAnha0qkkA4kAZuZO0k9FPFag2yHJHYR1Iw3gO7CsgiCKmPwMdEmajBuZBmBmbuMcLOKpQt1BSUdTAczMVZmQmjwtpTmC3xqo0ybpw5ROXQbMrA+45GtQUmYVy7JlZpYl0/B73YZuBAjqbWYI4KWkzWkZeBVSNuMAZua1FBorSY4MTEpangYQlM4EgOdZy6ExazkAiNtoXELvgLasIGr0sT0QZaAVAO8ltadlYBTYNcsB7kjanQZwHjg2ywGaViHXIruN7DVmYA+4lnudpC+JGXBfhlwTZwDAPQi4s6o2kloJ9yzyyKcXajGA64F6JL1tChBlwdX0oIrSgirUK+l+49pudh/IhGhhBvolDSRtzKa9jJktBdxrWk+icvXnwO3oIexFWlXJbMbMbAGwJQWg1o0WWEKpLUjSBcZ7CXnV0ZhQXoBQP/MAUzNgZu5Z8EbRGQT2S7qZ107mHmhmuIQnl2lXxFCQQgDRmTEGbAt1DIxJ2pFDr06lDIBFgDsdlwQE8wNol/Q7QCdRtDBAlIVO4FlAMJ2SMk96H3ulAEQQh4FBD6d9koY85LxESgOIIK67qtLE87CkUt+cSgWIICaAjQkQE5I2eU1rgFAVACsA9/Dk/qGcGv+ANZK+BsTmJVo6QJSFXuBeLIKdkh54RRQoVAlABHECOAOclHQ2MC5v8coAIojR+AuCd1QBgpUCBMSRW3QeIPfUlaT4H0/7RUAi2a/NAAAAAElFTkSuQmCC";
    var html =
      '<div id="' +
      eleId +
      '" style="width:25px;padding:10px 0px;text-align:center;background-color:#E5212E;position:fixed;top:250px;left:0px;color:#FFF;font-size:0px;z-index:9999999999999;cursor:pointer;margin:0px auto;text-align:center;">' +
      '<img src="' +
      iconVideo +
      '" style="width:20px;">' +
      "</div>";
    $("body").append(html);
    $("body").on("click", "#" + eleId, function () {
      var video_url = window.location.href; //获取当前页面url
      function clickBotton() {
        window.open("https://y2mate.is/?url=" + video_url); //打开新页面
      }
    });
  }
})();
