// ==UserScript==
// @name         百度网盘视频提供倍速播放
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  百度网盘视频提供倍速播放
// @author       Jason
// @homepage     https://github.com/liu464847593/my-Tampermonkey/blob/master/baiduRate.js
// @grant        none
// @include      https://pan.baidu.com/play/video*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
  'use strict';
  initButton();

  $('.rate-ul__li').click(function () {
    var rate = this.innerText;
    if(!videojs.getPlayers("video-player").html5player || !videojs.getPlayers("video-player").html5player.tech_) return;
    videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(rate);
  });


  function initButton() {
    var setStyle = {
      'rate-button': {
        'position': 'relative',
        'padding': '0 10px',
        'display': 'inline-block',
        'color': '#09AAFF',
        'border': '1px solid #C3EAFF',
        'border-radius': '4px',
        'line-height': '32px',
        'cursor': 'pointer',
      },
      'rate-ul': {
        'display': 'none',
        'position': 'absolute',
        'width': '100%',
        'left': '0',
        'top': '32px',
        'padding': '0',
        'margin': '0',
        'z-index': '999'
      },
      'rate-ul__li': {
        'border': '1px solid #C3EAFF',
        'border-radius': '4px',
        'color': '#09AAFF',
        'line-height': '32px',
        'list-style-type': 'none',
        'text-align': 'center',
        'background-color': '#ffffff',
      }
    };
    var button = `<div class="rate-button">倍速
                    <ul class="rate-ul">
                      <li class="rate-ul__li">0.5</li>
                      <li class="rate-ul__li">1</li>
                      <li class="rate-ul__li">1.5</li>
                      <li class="rate-ul__li">2</li>
                    </ul>
                </div>`

    $('.video-toolbar-buttonbox').append(button);


    $('.rate-button').css(setStyle['rate-button']);
    $('.rate-ul').css(setStyle['rate-ul']);
    $('.rate-ul__li').css(setStyle['rate-ul__li']);

    $('.rate-button').mouseover(function () {
      $('.rate-ul').show()
    });
    $('.rate-button').mouseout(function () {
      $('.rate-ul').hide()
    });
  }
})();