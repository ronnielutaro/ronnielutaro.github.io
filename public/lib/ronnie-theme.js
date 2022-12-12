/* -------------------------------------------

Name: 		ronnielutalo.github.io
Author:		Ronnie Lutalo
Portfolio:  https://ronnielutalo.github.io

------------------------------------------- */

var sheets = {
    orange: $('<link rel="stylesheet" href="/css/primary-color/orange.css">'),
    red: $('<link rel="stylesheet" href="/css/primary-color/red.css">'),
    coral: $('<link rel="stylesheet" href="/css/primary-color/coral.css">'),
    green: $('<link rel="stylesheet" href="/css/primary-color/green.css">'),
};

var sheets2 = {
    blueoverlay: $('<link rel="stylesheet" href="/css/overlay-color/blue.css">'),
    violetoverlay: $('<link rel="stylesheet" href="/css/overlay-color/violet.css">'),
};

var currentSheet = sheets.coral.appendTo($("head"));

var currentSheet2 = sheets2.blueoverlay.appendTo($("head"));

$("a.swapColor").click(function () {
    currentSheet.detach(); //remove the current sheet
    currentSheet = (sheets[$(this).attr("data-theme")]).appendTo($("head"));
});

$("a.swapOverlay").click(function () {
    currentSheet2.detach(); //remove the current sheet
    currentSheet2 = (sheets2[$(this).attr("data-theme")]).appendTo($("head"));
});

$('.open-changer').click(function () {
    $('.color-change').toggleClass("active-changer");
});
