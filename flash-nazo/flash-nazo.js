// 共有値
var counter = 1; // 最初の問題の番号
var answer = [] // ユーザーの回答

$(function() {

    // 隠す要素はクローズ
    $(".hide").hide();

    // 最初のルール説明
    $(".readme ul").text("");
    $(".readme ul").append("<li>問題は全部で<span class='font-red'>" + mondai + "問</span>出題されます</li>")
    $(".readme ul").append("<li><span class='font-red'>" + setSecond + "秒</span>たつと次の問題に切り替わります</li>")
    $(".readme ul").append("<li>「次へ」を押しても次へ進めます</li>")
    $(".readme ul").append("<li>回答は答えに近いものを選ぶ方式です</li>")
    $(".readme ul").append("<li>この画面を押すとゲームスタートです</li>")

    // はてなの仕様により一部のスクリプトを遅延読み込み
    readScript();

    // 解説用のボタンクリック処理
    $(document).on("click", ".kaisetsu-button", function() {
        $(this).next(".js_close").toggle();
    });

    // 一番上に問題が来るように画面をスクロールする
    $(".nazo-screen p").on({
        "click": function() {
            $(".nazo-screen p").hide();
            $(".readme").show();
        }
    });

    // 最初のルール説明がクリックされた時の処理
    $(".readme").on({
        "click": function() {
            $("html,body").animate({scrollTop: $('.nazo-screen').offset().top})
            $(".readme").hide();
            $(".question").attr("onload", "nazoTimer();")

            // 上へ戻るボタンは消す
            $("#page-top").remove();

            // ゲームスタート
            gameStart();
        }
    });

    // 回答がタップされた時の処理
    $('.nazo-ans').on({
        "click": function() {
            $('.nazo-ans').removeClass('nazo-ans-active');
            $(this).addClass('nazo-ans-active');
        }
    });

    $('.next-nazo').on({
      "click": function() {
            nextButton();
      }
    })
});

// タイマーの管理
function nazoTimer() {
    //console.log("timer")
    $('.circle').circleProgress({
        value: 1,
        startAngle: 300,
        size: 50,
        thickness: 5,
        animation: {
            duration: setSecond * 1000,
            easing: "linear"
        },
        fill: {
            color: "#00bcac"
        }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.circle-value').text((setSecond - setSecond * progress).toFixed(1));
    });

    var second = 0;
    timerId = setInterval(function() {
        second += 1;
        if (second >= setSecond) {
            clearInterval(timerId);
            counter = counter + 1
            gameStart();
        }
        countTime = setSecond - second;
    }, 1000);
};

// ゲーム全体の管理
function gameStart() {

    // console.log("gameStart: " + counter + "問目")

    // 最初は隠されている物を表示する
    if (counter == 1) {
        $(".hide").show();
        $(".nazo-screen p").hide();

    // 次回以降は回答を配列に格納していく。無回答なら0
    } else if (counter > 1) {
        if ($('.nazo-ans').hasClass('nazo-ans-active')) {
            answer.push($('.nazo-ans-active').index());
        } else {
            answer.push(0);
        };
    };

    // 規定の問題に達したら正誤チェックへ
    if (counter > mondai) {
        //console.log("end")
        answerCheck();
        return;
    };

    // activeがあれば削除
    $('.nazo-ans').removeClass('nazo-ans-active');

    // 問題数を表示
    $('.question-num').text(counter + "/" + mondai + "問")

    // 問題と選択肢を表示
    $(".question").attr("src", nazolist[counter - 1].q);
    $(".ans1").text(nazolist[counter - 1].c[0]);
    $(".ans2").text(nazolist[counter - 1].c[1]);
    $(".ans3").text(nazolist[counter - 1].c[2]);
    $(".ans4").text(nazolist[counter - 1].c[3]);

}

function nextButton() {
  clearInterval(timerId);
  counter = counter + 1
  gameStart();
}

//
// はてなブログだとページ下部でjQueryを読み込んでおり
// circle-progressで読み込んだjQueryがリセットされるためロードのタイミングをずらす
//
function readScript() {
    var script = document.createElement("script");
    script.src = "https://lirlia.github.io/blog/flash-nazo/circle-progress.js";
    document.body.appendChild(script);
};

// 回答のチェックを行う&結果表示
function answerCheck() {
    $(".hide").hide();
    $(".hanko").show();

    // 終了のハンコを表示
    $(".hanko").animate({
        paddingRight: 1
    }, {
        duration: 400,
        step: function(now, fx) {
            $(this).css({
                transform: 'scale(' + (1.5 - now) + ')'
            });
        }
    })


    var collect = 0
    //console.log(answer.length)
    //console.log(nazolist.length)
    if (answer.length != nazolist.length) {
        window.alert("予期せぬエラーが発生しました。")
    } else {
        for (var i = 0, l = answer.length; i < l; i++) {
            if (answer[i] == nazolist[i].a) {
                collect += 1
                // 解説追加
                $(".kaisetu").append('<p class="kaisetsu-button button-black">' +
                    (i + 1) + '</p><div class="js_close"><img src="' +
                    nazolist[i].q + '" /><p>' + nazolist[i].k +
                    '</p><p>答え：<strong>' + nazolist[i].c[nazolist[i].a - 1] +
                    '</strong></p></div>')
                continue;
            }
            // 解説追加
            $(".kaisetu").append('<p class="kaisetsu-button button-red">' + (i + 1) +
                '</p><div class="js_close"><img src="' + nazolist[i].q +
                '" /><p>' + nazolist[i].k + '</p><p>答え：<strong>' +
                nazolist[i].c[nazolist[i].a - 1] + '</strong></p></div>')
        }
        var nazo_all_result_messages = "お疲れ様でした<br>あなたの得点は <strong>" + (
            collect / nazolist.length) * 100 + "点</strong> です！";
        $(".nazo-all-result-messages").html(nazo_all_result_messages);
        $('.nazo-all-result').toggle();

        var facebook_href = 'https://www.facebook.com/sharer.php?u=' +
            location.href;
        var twitter_href_text = 'あなたの得点は ' + (collect / nazolist.length) * 100 +
            "点です！" + $('.entry-title').text() + ' ' + location.href + ' #' +
            nazo_name + " @tenhouginsamaさんから";
        var twitter_href = 'https://twitter.com/intent/tweet?text=' +
            encodeURIComponent(twitter_href_text);
        var line_href = 'https://line.me/R/msg/text/?' + $('.entry-title').text() +
            ' ' + location.href
        $('.nazo-facebook').attr("href", facebook_href);
        $('.nazo-twitter').attr("href", twitter_href);
        $('.nazo-line').attr("href", line_href);
        $('.kaisetu').show();
    }
};
