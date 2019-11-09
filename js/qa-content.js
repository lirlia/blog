var html = '<p><img class="hatena-fotolife" title="f:id:lirlia:20191109150803p:plain" src="https://cdn-ak.f.st-hatena.com/images/fotolife/l/lirlia/20191109/20191109150803.png" alt="f:id:lirlia:20191109150803p:plain" /></p>' +
'<div style="margin-left: auto; width: 35%;"><a href="https://twitter.com/intent/tweet?screen_name=tenhouginsama&amp;hashtags=ぎん謎解き質問" target="_blank"><img title="f:id:lirlia:20191109153316p:plain" src="https://cdn-ak.f.st-hatena.com/images/fotolife/l/lirlia/20191109/20191109153316.png" alt="f:id:lirlia:20191109153316p:plain" /></a></div>' +
'<p><span style="text-decoration: underline;">質問の例</span></p>' +
'<ul>' +
'<li>難易度がわからないので参加を迷っている</li>' +
'<li>デートに向いているイベントか教えて欲しい</li>' +
'<li>事前にやったほうがいい問題を教えて欲しい 等<br />※Twiiterではリプライでのやりとりとなります</li>' +
'</ul>'

var qalinkHTMLItems = document.querySelectorAll("div.qa-content");

qalinkHTMLItems.forEach(function(qalinkHTML) {
  if(qalinkHTML != null) {
    qalinkHTML.innerHTML = html;
  }
});
