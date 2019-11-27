$(function() {

    var nazotore_url_list= [
      '20161124_nazotore',  '2017/01/26/nazotore',  '20170126_nazotore',  '2017/02/01/025017',  '20170215_nazotore',  '20170307_nazotore',  '20170328_nazotore',  '20170418_nazotore',  '20170502_nazotore',  '20170516_nazotore',  '20170601_nazotore',  '20170613_nazotore',  '20170704_nazotore',  '20170714_nazotore',  '20170802_nazotore',  '20170815_nazotore',  '20170829_nazotore',  '20170912_nazotore',  '20170926_nazotore',  '20171010_nazotore',  '20171031_nazotore',  '20171114_nazotore',  '2017/12/06/004059',  '20171226_nazotore',  '20180109_nazotore',  '20180123_nazotore',  '20180130_nazotore',  '20180206_nazotore',  '20180213_nazotore',  '20180220_nazotore',  '20180227_nazotore',  '20180313_nazotore',  '20180320_nazotore',  '20180410_nazotore',  '20180424_nazotore',  '20180501_nazotore',  '20180508_nazotore',  '20180522_nazotore',  '20180529_nazotore',  '20180605_nazotore',  '20180612_nazotore',  '20180619_nazotore',  '20180626_nazotore',  '20180710_nazotore',  '20180717_nazotore',  '20180724_nazotore',  '20180731_nazotore',  '20180807_nazotore',  '20180821_nazotore',  '20180828_nazotore',  '20180904_nazotore',  '20180918_nazotore',  '20181002_nazotore',  '20181009_nazotore',  '20181023_nazotore',  '20181030_nazotore',  '20181106_nazotore',  '20181113_nazotore',  '20181127_nazotore',  '20181204_nazotore',  '20181211_nazotore',  '20181218_nazotore',  '20190122_nazotore',  '20190205_nazotore',  '20190212_nazotore',  '20190219_nazotore',  '20190312_nazotore',  '20190409_nazotore',  '20190507_nazotore',  '20190514_nazotore',  '20190521_nazotore',  '20190528_nazotore',  '20190611_nazotore',  '20190618_nazotore',  '20190709_nazotore',  '20190730_nazotore'
    ]

    // 記事のURLを取得
    var nazotore_now = location.href.split("entry/")[1]
    var num  = nazotore_url_list.indexOf(nazotore_now, 0)
    var prev = num - 1
    var next = num + 1

    $(".nazotore-end").append('<div class="nazo-next-prev">'
        + '<p class="nazo-button nazo-next"><a href="https://www.nazomap.com/entry/' + nazotore_url_list[next] + '"/></a></p>'
        + '<p class="nazo-button nazo-first"><a href="https://www.nazomap.com/entry/20160201_nazotore">一覧に戻る</a></p>'
        + '<p class="nazo-button nazo-prev"><a href="https://www.nazomap.com/entry/' + nazotore_url_list[prev] + '"/></a></p>'
        + '</div>')

    // No.1/75だけ処理を変える
    if (num == 0) {
        $(".nazo-prev").html('<p>　</p>');
        $(".nazo-next").children('a').text('←次の謎を解く');
    } if (num == 75) {
        $(".nazo-next").html('<p>　</p>');
        $(".nazo-prev").children('a').text('前の謎を解く→');
    } else {
        $(".nazo-next").children('a').text('←次の謎を解く');
        $(".nazo-prev").children('a').text('前の謎を解く→');
    }

    $(".nazotore-end").append('<p>　</p>')
    $(".nazotore-end").append('<p>🔻他の謎解きにも挑戦しよう！</p>')
    $(".nazotore-end").append('<ul>'
        + '<li><a href="https://www.nazomap.com/entry/kisonazo_1">リアル脱出ゲームででる基礎なぞ</a>に挑戦</li>'
        + '<li><a href="https://www.nazomap.com/entry/gin_nazo_1">小学生から解ける謎解き練習問題</a>に挑戦</li>'
        + '</ul>');
    //$(".nazotore-end").append('<p>　</p>')
    //$(".nazotore-end").append('<p style="text-align: center">＼ 解けたら友達にも出題しよう ／</p>')
    //$(".nazotore-end").append('<a target="_blank"><p class="nazo-facebook nazo-sns-box">Facebookで謎をシェア</p></a>')
    //$(".nazotore-end").append('<a target="_blank"><p class="nazo-twitter nazo-sns-box" >Twitterで謎をシェア</p></a>')
    //$(".nazotore-end").append('<a target="_blank"><p class="nazo-line nazo-sns-box">LINEで謎をシェア</p></a>')

    //var facebook_href = 'https://www.facebook.com/sharer.php?u=' + location.href;
    //var twitter_href_text = 'この謎が解けるかな？🔻' + $('.entry-title').text() + ' ' + location.href;
    //var twitter_href = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(twitter_href_text);
    //var line_href = 'https://line.me/R/msg/text/?この謎が解けるかな？🔻' + $('.entry-title').text() + ' ' + location.href
    //$('.nazo-facebook').parent().attr("href", facebook_href);
    //$('.nazo-twitter').parent().attr("href", twitter_href);
    //$('.nazo-line').parent().attr("href", line_href);
});
