//<loading画面の表示>

$(window).on('load',function(){
  //ローディング画面の背景を２・５秒待機してから、フェイドアウト
  $("#loader").delay(2300).fadeOut('slow');
  //画像を２．２秒待機してからフェイドアウト
  $("#load_logo").delay(2200).fadeOut('slow');
});




/*
//<Yooutube画面のモーダルウィンドウ>
$('.y1 a').click(function() {
        var imgSrc = $(this).children().attr('src');
        $('.bigimg').children().attr('src', imgSrc);
        $('.modal').fadeIn();
        $('body,html').css('overflow-y', 'hidden');
        return false
      });
$('.close-btn').click(function() {
        $('.modal').fadeOut();
        $('body,html').css('overflow-y', 'visible');
        return false
      });
      */


// 画像クリック時にmodalでyoutube再生
(function () {
  if ($(".js-modal-video").length) { //クラス名js-modal-videoがあれば以下を実行
    $(".js-modal-video").modalVideo({
      channel: "youtube",
      youtube: {
      rel: 0, //関連動画の指定
      autoplay: 0, //自動再生の指定
      controls: 0, //コントロールさせるかどうかの指定
      },
    });
  }
})();
