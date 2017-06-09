/*
 ４択クイズのJQuery
 問題数やn択クイズを自由に設定できます。

 date: 2017.06.10 v0.0.2
 author: gin
 mail: nazomap@gmail.com
 license: GPL
*/

$(function(){

  //
  // 解答クリック時の挙動
  //   1. 解答済みの判定
  //   2. クイズの正誤判定と正解の表示
  //   3. 最終結果の表示
  //
  $(".quiz-choice-list").on({
    "click":function() {
      //
      // 1.すでに解答済みの場合は処理を実行しない
      //
      parent = $(this).parent()

      if (parent.hasClass("quiz-already-ans")) { return false }
      parent.addClass("quiz-already-ans");

      //
      // クイズの正誤判定と正解の表示
      //
      quiz_ans = parent.next(".quiz-ans")
      quiz_result = quiz_ans.children(".quiz-result")

      quiz_ans.toggle();
      parent.css('cursor', 'default');

      if ($(this).hasClass("quiz-true")) {

        // 正解判定を追加
        quiz_result.addClass("quiz-collect")

        // 正解の表示
        quiz_result.text(" 正解！")
      }else {
        $(this).addClass("quiz-red")

        // 不正解判定を追加
        quiz_result.addClass("quiz-incollect")

        // 不正解の表示
        quiz_result.text(" 不正解！")
      };
      $(this).removeClass("quiz-uncheck").addClass("quiz-check");
      parent.children(".quiz-true").addClass("quiz-green");

      // 最終結果の表示
      // 回答数
      var ans_count = $('.quiz-collect,.quiz-incollect').length;
      // 問題数
      var ques_count = $('.quiz-choice').length;
      // 問題数
      var collect_count = $('.quiz-collect').length;
      // 級位
      var rank = ques_count + 1 - collect_count;

      if (ans_count == ques_count) {

          var quiz_all_result_messages = "あなたは " + quiz_name + rank + "級 です! (" +collect_count + "/" + ans_count + "問正解)";
          $(".quiz-all-result-messages").text(quiz_all_result_messages);

          $('.quiz-all-result').toggle();
          $("html,body").animate({scrollTop:$('.quiz-all-result').offset().top})

          var facebook_href = 'http://www.facebook.com/sharer.php?u=' + location.href;
          var twitter_href_text = quiz_all_result_messages + ' ' + $('.entry-title').text() + ' ' + location.href + ' @tenhouginsamaさんから #' + quiz_name +' #' + rank + '級';
          var twitter_href = 'http://twitter.com/intent/tweet?text=' + encodeURIComponent(twitter_href_text);
          var line_href = 'http://line.me/R/msg/text/?'+ $('.entry-title').text() + ' ' + location.href
          $('.quiz-facebook').attr("href", facebook_href);
          $('.quiz-twitter').attr("href", twitter_href);
          $('.quiz-line').attr("href", line_href);
      }

    }
  });
});
