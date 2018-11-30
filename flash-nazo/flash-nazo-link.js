// nazotoreのカエレバリンク

var html = '<p>他のシリーズはこちらから遊べます↓</p><ul class="link1">' +
'<li><a href="https://www.nazomap.com/entry/201811_flash-nazo">[第1弾] フラッシュ謎解きに挑戦！</a></li>' +
'<li><a href="https://www.nazomap.com/entry/201811_flash-nazo2">[第2弾] フラッシュ謎解きに挑戦！</a></li>' +
'<li><a href="https://www.nazomap.com/entry/201811_flash-nazo3">[第3弾] フラッシュ謎解きに挑戦！</a></li>' +
'<li><a href="https://www.nazomap.com/entry/201811_flash-nazo4">[第4弾] フラッシュ謎解きに挑戦！</a></li>' +
'</ul>'
var bookHTML = document.querySelector("div#flash-nazo-link");

if(bookHTML != null) {
	bookHTML.innerHTML = html;
}
