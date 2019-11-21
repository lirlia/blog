$(function() {


    $(".konazo-end").append('<p>🔻他の問題への挑戦はこちら</p>')
    $(".konazo-end").append('<ul>')
    $(".konazo-end").append('<li><a href="https://www.nazomap.com/archive/category/%E9%9B%A3%E6%98%93%E5%BA%A6%E2%98%851">難易度★1の謎</a>に挑戦</li>')
    $(".konazo-end").append('<li><a href="https://www.nazomap.com/archive/category/%E9%9B%A3%E6%98%93%E5%BA%A6%E2%98%852">難易度★2の謎</a>に挑戦</li>')
    $(".konazo-end").append('<li><a href="https://www.nazomap.com/archive/category/%E9%9B%A3%E6%98%93%E5%BA%A6%E2%98%853">難易度★3の謎</a>に挑戦</li>')
    $(".konazo-end").append('<li><a href="https://www.nazomap.com/archive/category/%E9%9B%A3%E6%98%93%E5%BA%A6%E2%98%854">難易度★4の謎</a>に挑戦</li>')
    $(".konazo-end").append('<li><a href="https://www.nazomap.com/archive/category/%E9%9B%A3%E6%98%93%E5%BA%A6%E2%98%855">難易度★5の謎</a>に挑戦</li>')
    $(".konazo-end").append('</ul><p> </p>')
    $(".konazo-end").append('<p>解けたら友達にも出題してあげてね！</p>')
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
