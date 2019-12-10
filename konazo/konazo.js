$(function() {

    // 記事のURLを取得
    var list = location.href.split("_")
    var num  = Number(list[2])
    var prev = num - 1
    var next = num + 1

    $(".konazo-end").append('<div class="nazo-next-prev">'
        + '<p class="nazo-button nazo-first"><a href="https://www.nazomap.com/entry/gin_nazo_1">No1に戻る</a></p>'
        + '<p class="nazo-button nazo-prev"><a href="https://www.nazomap.com/entry/gin_nazo_' + prev + '"/></a></p>'
        + '</div>')

    // 次回の謎が存在しない場合はリンクを削除する
    $(function(){
      var url = 'https://www.nazomap.com/entry/gin_nazo_' + next;

      $.ajax({
        url: url,
        type: 'GET',
      }).then(function(data){
        $(".nazo-next-prev").prepend('<p class="nazo-button nazo-next"><a href="https://www.nazomap.com/entry/gin_nazo_' + next + '"/></a></p>')
        $(".nazo-next").children('a').text('←No' + next + 'を解く')
      }, function(data){
        $(".nazo-next-prev").prepend('<p class="nazo-button nazo-next">←No' + next + 'を解く</p>')
      });
    });

    // No.1だけ処理を変える
    if (num == 1) {
        $(".nazo-prev").html('<p>　 </p>');
    } else {
        $(".nazo-prev").children('a').text('No' + prev +'を解く→');
    }

    $(".konazo-end").append('<p>　</p>')
    $(".konazo-end").append('<p>🔻他の難易度の問題にも挑戦しよう！</p>')
    $(".konazo-end").append('<ul>'
        + '<li><a href="https://www.nazomap.com/archive/category/%E9%9B%A3%E6%98%93%E5%BA%A6%E2%98%851">難易度★1の謎</a>に挑戦</li>'
        + '<li><a href="https://www.nazomap.com/archive/category/%E9%9B%A3%E6%98%93%E5%BA%A6%E2%98%852">難易度★2の謎</a>に挑戦</li>'
        + '<li><a href="https://www.nazomap.com/archive/category/%E9%9B%A3%E6%98%93%E5%BA%A6%E2%98%853">難易度★3の謎</a>に挑戦</li>'
        + '<li><a href="https://www.nazomap.com/archive/category/%E9%9B%A3%E6%98%93%E5%BA%A6%E2%98%854">難易度★4の謎</a>に挑戦</li>'
        + '<li><a href="https://www.nazomap.com/archive/category/%E9%9B%A3%E6%98%93%E5%BA%A6%E2%98%855">難易度★5の謎</a>に挑戦</li>'
        + '</ul>');
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
