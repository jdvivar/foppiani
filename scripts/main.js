"use strict";document.addEventListener("DOMContentLoaded",function(){function n(){$("nav .section-link").css("display","block"),o=!o}function t(){$("nav .section-link").css("display","none"),o=!o}function i(n){c=!!n.matches}var o=!1,c=void 0;$(".menu").click(function(){o?t():n()}),$(".section-link").click(function(){c&&t()});var e=window.matchMedia("(max-width: 768px)");e.addListener(i),i(e),$('[data-toggle="tooltip"]').tooltip()});