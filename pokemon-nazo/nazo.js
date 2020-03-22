$(function() {

    var udate = (location.href).split("-")[2]
    var year = String(udate).substr(0, 4)
    var month = String(udate).substr(4, 2)

    var dt = new Date(year, month - 1)

    dt.setMonth(dt.getMonth() + 1);
    var nextdate = dt.getFullYear().toString() +  ('00' + (dt.getMonth() + 1).toString()).slice(-2)

    dt.setMonth(dt.getMonth() - 2);
    var prevdate = dt.getFullYear().toString() + ('00' + (dt.getMonth() + 1).toString()).slice(-2)

    $(".pokemon-end").append('<div class="nazo-next-prev">'
        + '<p class="nazo-button nazo-first"><a href="https://www.nazomap.com/entry/tv-pokemon"><ruby><rb>一覧</rb><rp>（</rp><rt>いちらん</rt> <rp>）</rp></ruby>にもどる</a></p>'
        + '<p class="nazo-button nazo-prev"><a href="https://www.nazomap.com/entry/tv-pokemon-' + prevdate + '"><ruby><rb>前</rb><rp>（</rp><rt>まえ</rt> <rp>）</rp></ruby>の<ruby><rb>謎</rb><rp>（</rp><rt>なぞ</rt> <rp>）</rp></ruby>を<ruby><rb>解</rb><rp>（</rp><rt>と</rt> <rp>）</rp></ruby>く→</a></p>'
        + '</div>')

    $(function(){
        var url = 'https://www.nazomap.com/entry/tv-pokemon-' + nextdate;

        $.ajax({
            url: url,
            type: 'GET',
        }).then(function(data){
            $(".nazo-next-prev").prepend('<p class="nazo-button nazo-next"><a href="https://www.nazomap.com/entry/tv-pokemon-' + nextdate + '">←<ruby><rb>次</rb><rp>（</rp><rt>つぎ</rt> <rp>）</rp></ruby>の<ruby><rb>謎</rb><rp>（</rp><rt>なぞ</rt> <rp>）</rp></ruby>を<ruby><rb>解</rb><rp>（</rp><rt>と</rt> <rp>）</rp></ruby>く</a></p>')

        }, function(data){
            $(".nazo-next-prev").prepend('<p class="nazo-button nazo-next">←<ruby><rb>次</rb><rp>（</rp><rt>つぎ</rt> <rp>）</rp></ruby>の<ruby><rb>謎</rb><rp>（</rp><rt>なぞ</rt> <rp>）</rp></ruby>を<ruby><rb>解</rb><rp>（</rp><rt>と</rt> <rp>）</rp></ruby>く</p>')
        });
    });

    if (prevdate == "201910") {        
        $(".nazo-prev").html('<p class="nazo-button nazo-prev"><ruby><rb>前</rb><rp>（</rp><rt>まえ</rt> <rp>）</rp></ruby>の<ruby><rb>謎</rb><rp>（</rp><rt>なぞ</rt> <rp>）</rp></ruby>を<ruby><rb>解</rb><rp>（</rp><rt>と</rt> <rp>）</rp></ruby>く→</p>')
    } 
    
});
