$(function() {

    // 記事のURLを取得
    var list = location.href.split("_")
    var num  = Number(list[1])
    var prev = num - 1
    var next = num + 1

    $(".konazo-end").append('<div class="nazo-next-prev">'
        + '<p class="nazo-button nazo-first"><a href="https://www.nazomap.com/entry/senzai_1">最初に戻る</a></p>'
        + '<p class="nazo-button nazo-prev"><a href="https://www.nazomap.com/entry/senzai_' + prev + '"/></a></p>'
        + '</div>')

    // 次回の謎が存在しない場合はリンクを削除する
    $(function(){
      var url = 'https://www.nazomap.com/entry/senzai_' + next;

      $.ajax({
        url: url,
        type: 'GET',
      }).then(function(data){
        $(".nazo-next-prev").prepend('<p class="nazo-button nazo-next"><a href="https://www.nazomap.com/entry/senzai_' + next + '"/></a></p>')
        $(".nazo-next").children('a').text('←次を解く')
      }, function(data){
        $(".nazo-next-prev").prepend('<p class="nazo-button nazo-next">←次を解く</p>')
      });
    });

    // No.1だけ処理を変える
    if (num == 1) {
        $(".nazo-prev").html('<p>　 </p>');
    } else {
        $(".nazo-prev").children('a').text('前を解く→');
    }

    $(".konazo-end").append('<p>　</p>')
    $(".konazo-end").append('<p style="text-align: center">＼ 解けたら友達にも出題しよう ／</p>')
    $(".konazo-end").append('<a target="_blank"><p class="nazo-facebook nazo-sns-box">Facebookで謎をシェア</p></a>')
    $(".konazo-end").append('<a target="_blank"><p class="nazo-twitter nazo-sns-box" >Twitterで謎をシェア</p></a>')
    $(".konazo-end").append('<a target="_blank"><p class="nazo-line nazo-sns-box">LINEで謎をシェア</p></a>')

    var facebook_href = 'https://www.facebook.com/sharer.php?u=' + location.href;
    var twitter_href_text = 'この謎が解けるかな？🔻' + $('.entry-title').text() + ' ' + location.href;
    var twitter_href = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(twitter_href_text);
    var line_href = 'https://line.me/R/msg/text/?この謎が解けるかな？🔻' + $('.entry-title').text() + ' ' + location.href
    $('.nazo-facebook').parent().attr("href", facebook_href);
    $('.nazo-twitter').parent().attr("href", twitter_href);
    $('.nazo-line').parent().attr("href", line_href);
});
