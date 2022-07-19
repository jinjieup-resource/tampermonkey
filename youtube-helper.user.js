// ==UserScript==
// @name         youtube-helper
// @namespace    youtube-helper
// @version      0.1.3
// @description  use y2mate.is to download youtube videos
// @author       jinjieup-resource
// @license      MIT
// @match        https://www.youtube.com/*
// @updateURL    https://raw.githubusercontent.com/jinjieup-resource/tempermonkey/main/youtube-helper.user.js
// @downloadURL  https://raw.githubusercontent.com/jinjieup-resource/tempermonkey/main/youtube-helper.user.js
// @grant        GM_openInTab
// ==/UserScript==
(function () {
  "use strict";
  if (window.location.href.indexOf("watch?v=") != -1) {
		var html='<div id="'+eleId+'" style="backgroundColor = "red";color = "white";border = "none";padding = "5px";fontSize = "12px";position = "fixed";bottom = "10px";right = "10px";">'+
							'<button type="button" style="backgroundColor = "red";color = "white";border = "none";padding = "5px";fontSize = "12px";position = "fixed";bottom = "10px";right = "10px";">下载视频</button>'+
							'</div>';
		$("body").append(html);
		$("body").on("click", "#"+eleId, function(){
      var videourl = "https://y2mate.is/?url="+window.location.href;
      commonFunctionObject.GMopenInTab(videourl, false);
    });
  }
})();