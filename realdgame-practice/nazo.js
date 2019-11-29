var html = '<p>🔻他の練習問題にも挑戦しよう！</p>' +
'<p>難易度★１（簡単）</p>' +
'<ul>' +
'<li><a href="https://www.nazomap.com/entry/practice-snow-moutain">閉ざされた雪山からの脱出 に挑戦</a></li>' +
'<li><a href="https://www.nazomap.com/entry/20150605_onepice">ワンピース 謎解きキャンペーン に挑戦</a></li>' +
'<li><a href="https://www.nazomap.com/entry/20150307_spynetabare">聡明なスパイは耳がいい に挑戦</a></li>' +
'<li><a href="https://www.nazomap.com/entry/2014/06/12/065313">デスノートの練習問題 に挑戦</a></li>' +
'</ul>' +
'<p>難易度★２</p>' +
'<ul>' +
'<li><a href="https://www.nazomap.com/entry/2014/06/17/224155">進撃の巨人 訓練兵最終試験 に挑戦</a></li>' +
'<li><a href="https://www.nazomap.com/entry/20150324_babel">バベルの謎を解け に挑戦</a></li>' +
'</ul>' +
'<p>難易度★３</p>' +
'<ul>' +
'<li><a href="https://www.nazomap.com/entry/20150523_magunorianetabare">マグノリア銀行からの脱出 に挑戦</a></li>' +
'<li><a href="https://www.nazomap.com/entry/0207_conan3netabare">怪盗キッドからの挑戦状 に挑戦</a></li>' +
'<li><a href="https://www.nazomap.com/entry/practice-sleepforest">悪い魔女からの挑戦状 に挑戦</a></li>' +
'<li><a href="https://www.nazomap.com/entry/2014/06/07/010503">インペルダウンからの脱出 に挑戦</a></li>' +
'<li><a href="https://www.nazomap.com/entry/2014/06/12/071534">オリエント急行からの脱出 に挑戦</a></li>' +
'<li><a href="https://www.nazomap.com/entry/0223_toranpu">トランプ迷宮からの脱出 に挑戦</a></li>' +
'<li><a href="https://www.nazomap.com/entry/20150330_sao">SAO ラーググリーズを救え に挑戦</a></li>' +
'</ul>' +
'<p>難易度★４</p>' +
'<ul>' +
'<li><a href="https://www.nazomap.com/entry/0219_ginza">銀座令嬢誘拐事件 に挑戦</a></li>' +
'<li><a href="https://www.nazomap.com/entry/1222_ansatsunetabare">暗殺教室 練習問題 に挑戦</a></li>' +
'<li><a href="https://www.nazomap.com/entry/1202_%25E5%25AE%2587%25E5%25AE%2599%25E6%2580%25AA%25E7%258D%25A3%25E7%25B7%25B4%25E7%25BF%2592%25E5%2595%258F%25E9%25A1%258C">宇宙怪獣からの脱出 に挑戦</a></li>' +
'<li><a href="https://www.nazomap.com/entry/2014/09/01/190000">パズルガールズからの挑戦状 に挑戦</a></li>' +
'<li><a href="https://www.nazomap.com/entry/20150501_masukaradeeve">ホテルコルテシア練習問題 に挑戦</a></li>' +
'<li><a href="https://www.nazomap.com/entry/practice-santa">サンタ姫を助け出せ！ に挑戦</a></li>' +
'<li><a href="https://www.nazomap.com/entry/2014/06/21/004039">PSYCHO-PASS 執行官試験 に挑戦</a></li>' +
'<li><a href="https://www.nazomap.com/entry/practice-psycopass2">PSYCHO-PASS 2 に挑戦</a></li>' +
'</ul>' +
'<p>難易度★５(難しい）</p>' +
'<ul>' +
'<li><a href="https://www.nazomap.com/entry/2014/04/06/140233">忘れられた実験室からの脱出 に挑戦</a></li>' +
'</ul>' +
'<p>難易度Extra</p>' +
'<ul>' +
'<li><a href="https://www.nazomap.com/entry/konazo-kyodai">京大謎解き王決定戦 に挑戦</a></li>' +
'<li><a href="https://www.nazomap.com/entry/201704_gantan">激ムズの正月謎 に挑戦 </a></li>' +
'</ul>'

var practicelinkHTML = document.querySelector("div.realdgame-practice-link");

if(practicelinkHTML != null) {
	practicelinkHTML.innerHTML = html;
}

$(".realdgame-practice-link ul a").each(function(i, elem) {
	if ($(elem).attr("href") == location.href) {
    $(elem).parent().text($(elem).text())
	}
});
