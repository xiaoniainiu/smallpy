//返回顶部
$(function(){
//首先将#back-to-top隐藏
$("#totop").hide();
//当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
$(function () {
$(window).scroll(function(){
if ($(window).scrollTop()>100){
$("#totop").fadeIn();
}
else
{
$("#totop").fadeOut();
}
});
//当点击跳转链接后，回到页面顶部位置
$("#totop").click(function(){
$('body,html').animate({scrollTop:0},500);
return false;
});
});
});
$(document).ready(function(){
$("#fanhui_top").mouseleave(function(){
$("#fanhui_top_02").hide();
});
});
//首页幻灯片
$(function() {
var sWidth = $("#focus").width(); 
var len = $("#focus ul li").length;
var index = 0;
var picTimer;
var btn = "<div class='btnBg'></div><div class='btn'>";
for(var i=0; i < len; i++) {
btn += "<span></span>";
}
btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
$("#focus").append(btn);
$("#focus .btnBg").css("opacity",0.5);
$("#focus .btn span").css("opacity",0.4).mouseover(function() {
index = $("#focus .btn span").index(this);
showPics(index);
}).eq(0).trigger("mouseover");
$("#focus .preNext").css("opacity",0.2).hover(function() {
$(this).stop(true,false).animate({"opacity":"0.5"},300);
},function() {
$(this).stop(true,false).animate({"opacity":"0.2"},300);
});
$("#focus .pre").click(function() {
index -= 1;
if(index == -1) {index = len - 1;}
showPics(index);
});
$("#focus .next").click(function() {
index += 1;
if(index == len) {index = 0;}
showPics(index);
});
$("#focus ul").css("width",sWidth * (len));
$("#focus").hover(function() {
clearInterval(picTimer);
},function() {
picTimer = setInterval(function() {
showPics(index);
index++;
if(index == len) {index = 0;}
},4000); 
}).trigger("mouseleave");
function showPics(index) { 
var nowLeft = -index*sWidth; 
$("#focus ul").stop(true,false).animate({"left":nowLeft},300); 
$("#focus .btn span").stop(true,false).animate({"opacity":"0.4"},300).eq(index).stop(true,false).animate({"opacity":"1"},300); //为当前的按钮切换到选中的效果
}
$('.top').hover(function(){
$(this).stop().animate({"height":"42px"});	
},
function(){
$(this).stop().animate({"height":"32px"});	
}).click(function(){
$("html, body").animate({ scrollTop: 0 }, 120);	
});
var $div_li = $("div.devel_ll ul li");
var $div_div = $("div.devel_lr > div");
$div_li.hover(function(){
$(this).find("a").addClass("choice").end()    
.siblings().find("a").removeClass("choice");
var index = $div_li.index(this);
$div_div.eq(index).show()
.siblings().hide();
});
$('.caseList ul li').hover(function(){
$(this).addClass('choice');
},function(){
$(this).removeClass('choice');	
})
});
function AutoScroll(obj,scope,elem){
$(obj).find(elem).animate({
marginTop:scope								
},1000,function(){
$(this).css({marginTop:"0px"}).find("a:first").appendTo(this);	
});	
}
$(function(){
var $divp1 = $(".talking div.p4 a").length;
var $divp2 = $(".talking div.p3 a").length;
var $divp3 = $(".div2 a").length;
var $divp4 = $(".div3 a").length;
if($divp1 > 1){
var $setIn1 = setInterval('AutoScroll(".talking div.p4","-50px","span")',5000)		
}
if($divp2 > 1){
var $setIn2 = setInterval('AutoScroll(".talking div.p3","-50px","span")',5000)	
}
if($divp3 > 1){
var $setIn13 = setInterval('AutoScroll(".talking div.div2","-20px","p")',5000)	
}
if($divp4 > 1){
var $setIn14 = setInterval('AutoScroll(".talking div.div3","-20px","p")',5000)
}
});