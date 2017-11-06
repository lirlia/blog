  $(function(){
    //
    // "おもしろさ", "オススメ度", "満足度", "爽快感/驚き度", "ストーリー"
    // "バランスのよさ","オリジナル度","コスパ","演出/映像/小物/内装","司会/役者/スタッフ"
    //
    // ginRadarScore変数を定義すること
    // 例：var ginRadarScore = [3,8,8,8,8,10,8,8,8,8];
    var sum = ginRadarScore.reduce(function(p, c) { return p + c; });
    var data = {
        labels: ["おもしろさ", "オススメ度", "満足度", "爽快感/驚き度", "ストーリー","バランスのよさ","オリジナル度","コスパ","演出/映像","司会/スタッフ"],
        datasets: [
            {
              // 上のラベル内容
              label: "合計：" + sum + "点, 平均：" + sum/10 + "点",
              // チャートの背景色
              backgroundColor:"rgba(99,132,255,0.2)",
              // チャートの線の色
              borderColor:"rgba(99,132,255,1)",
              // ポイントの背景色
              pointBackgroundColor:"rgba(99,132,255,1)",
              // ポイントの線の色
              pointBorderColor:"#fff",
              // ポイントにカーソルを合わせた時の背景色
              pointHoverBackgroundColor:"#fff",
              // ポイントにカーソルを合わせた時の線の色
              pointHoverBorderColor:"rgba(99,132,255,1)",
              // データ
              data: ginRadarScore
            }
        ]
    };
    var ctx = $('.ginChart');
    var options = {
      scale: {
          // メモリの最小/最大サイズを指定
          ticks: {
            min: 0,
            max: 10
          },
          pointLabels: {
            fontSize: 20 //フォントサイズ
          },
      },
      legend: {
        // 表示する
        display: true,
        // 数値ラベルのフォントサイズ
        labels: {
          fontSize: 30
        }
      }
    };
    var radarChart = new Chart(ctx, { type: 'radar', data, options});
  });
