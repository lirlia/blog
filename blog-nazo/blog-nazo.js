/*
 ブログで謎解きを出す時ののJQuery

 date: 2018.09.24 v0.0.1
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
    console.log(q_index)
    if (ans[q_index] == encodeURIComponent($(obj).prev("input").val())){

      // 正解の場合は次の要素をオープン
      $(obj).parent().parent().next().show();
    } else {
      window.alert("入力内容に誤りがあります");
    };
}
