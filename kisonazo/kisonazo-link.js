$(function() {

    var kisonazo_url_list= [
      'kisonazo_1','201704_kisonazo2','201704_kisonazo3','201704_kisonazo4','201705_kisonazo5','201705_kisonazo6','201705_kisonazo7','201705_kisonazo8','201705_kisonazo9','201706_kisonazo10','201706_kisonazo11','201708_kisonazo12','201708_kisonazo13','201708_kisonazo14','201708_kisonazo15','201708_kisonazo16','201709_kisonazo18','201709_kisonazo19','201709_kisonazo20','201709_kisonazo21','201709_kisonazo22','201709_kisonazo23','201803_kisonazo24','201803_kisonazo25','201803_kisonazo26','201804_kisonazo27','201804_kisonazo28','201804_kisonazo29','201804_kisonazo30','201804_kisonazo31','201805_kisonazo32','201805_kisonazo33','201805_kisonazo34','201805_kisonazo34','201805_kisonazo36','201806_kisonazo28','201806_kisonazo37','201808_kisonazo17','201809_kisonazo39','201809_kisonazo40','201809_kisonazo41'
    ]

    // 記事のURLを取得
    var kisonazo_now = location.href.split("entry/")[1]
    var num  = kisonazo_url_list.indexOf(kisonazo_now, 0)
    var prev = num - 1
    var next = num + 1

    $(".kisonazo-end").append('<div class="nazo-next-prev">'
        + '<p class="nazo-button nazo-next"><a href="https://www.nazomap.com/entry/' + kisonazo_url_list[next] + '"/></a></p>'
        + '<p class="nazo-button nazo-first"><a href="https://www.nazomap.com/entry/kisonazo_1">第1弾に戻る</a></p>'
        + '<p class="nazo-button nazo-prev"><a href="https://www.nazomap.com/entry/' + kisonazo_url_list[prev] + '"/></a></p>'
        + '</div>')

    // 最初と最後だけ処理を変える
    if (num == 0) {
        $(".nazo-prev").html('<p>　 </p>');
        $(".nazo-next").children('a').text('←次の謎を解く');
    } if (num == kisonazo_url_list.length) {
        $(".nazo-next").html('<p>　 </p>');
        $(".nazo-prev").children('a').text('前の謎を解く→');
    } else {
        $(".nazo-next").children('a').text('←次の謎を解く');
        $(".nazo-prev").children('a').text('前の謎を解く→');
    }

    $(".kisonazo-end").append('<p>　</p>')
    $(".kisonazo-end").append('<p>🔻他の謎解きにも挑戦しよう！</p>')
    $(".kisonazo-end").append('<ul>'
        + '<li><a href="https://www.nazomap.com/entry/scrap-practice-nazo">リアル脱出ゲームの練習問題</a>に挑戦</li>'
        + '<li><a href="https://www.nazomap.com/entry/20161110_anothervision">今夜はナゾトレの問題</a>に挑戦</li>'
        + '<li><a href="https://www.nazomap.com/entry/gin_nazo_1">小学生から解ける謎解き練習問題</a>に挑戦</li>'
        + '</ul>');
});
