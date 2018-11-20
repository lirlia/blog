// nazotoreのカエレバリンク

var html = '<p>他のシリーズはこちらから遊べます↓</p><ul class="link1">' +
'<li><a href="https://www.nazomap.com/entry/201811_flash-nazo">[第1弾] フラッシュ謎解きはこちら</a></li>' +
'<li><a href="https://www.nazomap.com/entry/201811_flash-nazo2">[第2弾] フラッシュ謎解きはこちら</a></li>' +
'</ul>'
var bookHTML = document.querySelector("div#flash-nazo-link");

if(bookHTML != null) {
	bookHTML.innerHTML = html;
}
