$(function() {

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
