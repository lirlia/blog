var html = '<p>他のシリーズはこちらから遊べます↓</p><ul class="link1">' +
'<li><a href="https://www.nazomap.com/entry/201811_flash-nazo">[第1弾] フラッシュ謎解きに挑戦！</a><span style="display:none">　←現在挑戦中の問題</span></li>' +
'<li><a href="https://www.nazomap.com/entry/201811_flash-nazo2">[第2弾] フラッシュ謎解きに挑戦！</a><span style="display:none">　←現在挑戦中の問題</span></li>' +
'<li><a href="https://www.nazomap.com/entry/201811_flash-nazo3">[第3弾] フラッシュ謎解きに挑戦！</a><span style="display:none">　←現在挑戦中の問題</span></li>' +
'<li><a href="https://www.nazomap.com/entry/201811_flash-nazo4">[第4弾] フラッシュ謎解きに挑戦！</a><span style="display:none">　←現在挑戦中の問題</span></li>' +
'<li><a href="https://www.nazomap.com/entry/201812_flash-nazo5">[第5弾] フラッシュ謎解きに挑戦！</a><span style="display:none">　←現在挑戦中の問題</span></li>' +
'<li><a href="https://www.nazomap.com/entry/201812_flash-nazo6">[第6弾] フラッシュ謎解きに挑戦！</a><span style="display:none">　←現在挑戦中の問題</span></li>' +
'<li><a href="https://www.nazomap.com/entry/201812_flash-nazo7">[第7弾] フラッシュ謎解きに挑戦！</a><span style="display:none">　←現在挑戦中の問題</span></li>' +
'<li><a href="https://www.nazomap.com/entry/201812_flash-nazo8_1">[第8弾] フラッシュ謎解きに挑戦！</a><span style="display:none">　←現在挑戦中の問題</span></li>' +
'<li><a href="https://www.nazomap.com/entry/201901_flash-nazo9">[第9弾] フラッシュ謎解きに挑戦！</a><span style="display:none">　←現在挑戦中の問題</span></li>' +
'<li><a href="https://www.nazomap.com/entry/201901_flash-nazo10">[第10弾] フラッシュ謎解きに挑戦！</a><span style="display:none">　←現在挑戦中の問題</span></li>' +
'<li><a href="https://www.nazomap.com/entry/201905_flash-nazo11">[第11弾] フラッシュ謎解きに挑戦！</a><span style="display:none">　←現在挑戦中の問題</span></li>' +
'<li><a href="https://www.nazomap.com/entry/201907_flash-nazo12">[第12弾] フラッシュ謎解きに挑戦！</a><span style="display:none">　←現在挑戦中の問題</span></li>' +
'</ul>'
var flashlinkHTML = document.querySelector("div#flash-nazo-link");

if(flashlinkHTML != null) {
	flashlinkHTML.innerHTML = html;
}

$("#flash-nazo-link ul a").each(function(i, elem) {
	if ($(elem).attr("href") == location.href) {
		$(elem).next("span").show()
	}
});
