/*
 ブログで謎解きを出す時ののJQuery

 date: 2018.10.08 v0.0.1
 author: gin
 mail: nazomap@gmail.com
 license: GPL
*/

$(function(){

  // 隠す要素は閉じる
  $(".hide").hide()

  // submitが押された時の処理
  $(".submit").click(function(){ ansCheck($(this));})
});

function ansCheck(obj){
    // 問題の正誤チェック
    q_index = $('.nazo input[type=submit]').index($(obj));

    var shaObj = new jsSHA("SHA-256", "TEXT");
    shaObj.update($(obj).prev("input").val());
    var sha256digest = shaObj.getHash("HEX");
    if (ans[q_index] == sha256digest) {

      // 正解の場合は次の要素をオープン
      $(obj).parent().parent().next().show();
      window.alert("おめでとうございます、正解です！");
    } else {
      window.alert("入力内容に誤りがあります");
    };
}
