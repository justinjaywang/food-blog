$(document).ready(function(){$(".next").on("click",function(e){if($(this).offsetParent().is(":last-child")){$("html, body").animate({scrollTop:0},500)}else{var t=$(this).offsetParent().next().offset().top;$("html, body").animate({scrollTop:t},500)}});$(".prev").on("click",function(e){var t=$(this).offsetParent().prev().offset().top;$("html, body").animate({scrollTop:t},500)})})
