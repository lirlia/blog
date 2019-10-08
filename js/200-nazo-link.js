var html = '<p>他のシリーズはこちらから遊べます↓</p><ul class="link1">' +
'<li><a href="https://www.nazomap.com/entry/20150615_nazo1">ひらめき力を鍛える「謎解き200問」その1 </a><span style="display:none">　←現在挑戦中の問題</span></li>' +
'<li><a href="https://www.nazomap.com/entry/20150615_nazo2">ひらめき力を鍛える「謎解き200問」その2 </a><span style="display:none">　←現在挑戦中の問題</span></li>' +
'<li><a href="https://www.nazomap.com/entry/20150615_nazo3">ひらめき力を鍛える「謎解き200問」その3 </a><span style="display:none">　←現在挑戦中の問題</span></li>' +
'<li><a href="https://www.nazomap.com/entry/20150615_nazo4">ひらめき力を鍛える「謎解き200問」その4 </a><span style="display:none">　←現在挑戦中の問題</span></li>' +
'<li><a href="https://www.nazomap.com/entry/20150615_nazo5">ひらめき力を鍛える「謎解き200問」その5 </a><span style="display:none">　←現在挑戦中の問題</span></li>' +
'<li><a href="https://www.nazomap.com/entry/20150615_nazo6">ひらめき力を鍛える「謎解き200問」その6 </a><span style="display:none">　←現在挑戦中の問題</span></li>' +
'<li><a href="https://www.nazomap.com/entry/20150615_nazo7">ひらめき力を鍛える「謎解き200問」その7 </a><span style="display:none">　←現在挑戦中の問題</span></li>' +
'<li><a href="https://www.nazomap.com/entry/20150615_nazo8">ひらめき力を鍛える「謎解き200問」その8 </a><span style="display:none">　←現在挑戦中の問題</span></li>' +
'</ul>'
var flashlinkHTML = document.querySelector("div#two-nazo-link");

if(flashlinkHTML != null) {
	flashlinkHTML.innerHTML = html;
}

$("#two-nazo-link ul a").each(function(i, elem) {
	if ($(elem).attr("href") == location.href) {
		$(elem).next("span").show()
	}
});
