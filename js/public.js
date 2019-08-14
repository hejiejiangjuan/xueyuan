function moveAdjustment(domId) {
	document.documentElement.ontouchmove = function(e) {
		e.preventDefault();
	};
	var wrap = document.getElementById(domId);
	wrap.addEventListener('touchstart', function(e) {
		var startPoint = e.touches[0].clientY;
		wrap.ontouchmove = function(e) {
			var movePoint = e.touches[0].clientY;
			var nowScroll = wrap.scrollTop;
			var wholeScroll = wrap.scrollHeight - wrap.clientHeight;
			//注意，这里的对象不能是e.target，因为禁止冒泡之后这个e就没用了。
			if (nowScroll == 0) {
				if (startPoint < movePoint) {
					e.preventDefault();
				} else {
					e.stopPropagation();
				};
			} else if (nowScroll == wholeScroll) {
				if (startPoint > movePoint) {
					e.preventDefault();
				} else {
					e.stopPropagation();
				}
			} else if (nowScroll > 0 && nowScroll < wholeScroll) {
				e.stopPropagation();
			} else {
				e.preventDefault();
			};
		};

	}, false);
};
// moveAdjustment('main');
$(function() {
	$("input").on('focus', function() {
		setTimeout(function() {
			$("#inp").css("position", "static");
		}, 50);
	}).on('blur', function() {
		setTimeout(function() {
			$("#inp").css("position", "fixed");
			window.scroll(0, $(window).scrollTop() - 1);
		}, 50);
	});
});



function test2() {
	var showShield = false;
	var main = document.getElementById("main");
	var shielda = document.getElementById("shielda");
	//			var shielda = document.getElementById("shielda");
	//			var eee = document.getElementById("eee");
	//			var trigger = document.getElementById("trigger");
	//			var body = document.querySelector("body");
	//			var html = document.querySelector("html");

	//点击显示黑幕
	//			trigger.addEventListener("click", function() {
	//				shield.style.display = "flex";
	//
	//			}, false);

	//点击关闭黑幕
	//			info.addEventListener("touchstart", function() {
	//				shield.style.display = "none";
	//			}, false);

	//在黑幕层阻挡touch事件
	//		main.addEventListener("touchstart", function(e) {
	//			console.log("aaaa")
	//			e.stopPropagation();
	//			e.preventDefault();
	//		}, false);
	shielda.addEventListener("touchstart", function(e) {
		e.stopPropagation();
		e.preventDefault();
	}, false);
}
// test2();

$(".click_share").click(function() {
	console.log("aaa")
	$(".sq_all_share").show();
})
$(".sq_collection_cancel").click(function(){
	$(".sq_all_share").hide();
})
$(".sq_select_img").click(function(){
	$(".sq_select_city")
})
