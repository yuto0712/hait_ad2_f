//キャンバスに画像を描画する
function loadImage(id)
{
  //画像を読み込んでImageオブジェクトを作成する
  var image = new Image();
  image.src = 'https://monstar-lab.com/dx/wp-content/uploads/sites/19/2019/07/01.png';
  image.onload = (function () {
    //画像ロードが完了してからキャンバスの準備をする
    var canvas = document.getElementById(id);
    var ctx = canvas.getContext('2d');
    //キャンバスのサイズを画像サイズに合わせる
    canvas.width = image.width*1.4;
    canvas.height = image.height*1.2;
    //画像を拡大
    ctx.scale(1.4, 1.2);
    //キャンバスに画像を描画（開始位置0,0）
    ctx.drawImage(image, 0, 0);
  });
}

//キャンバスに文字を描く
function drawText(canvas_id, text_id, x, y)
{
  var canvas = document.getElementById(canvas_id);
  var ctx = canvas.getContext('2d');
  var text = document.getElementById(text_id);
  //文字のスタイルを指定
  ctx.font = '13px serif';
  ctx.fillStyle = 'black';
  //文字の配置を指定（左上基準にしたければtop/leftだが、文字の中心座標を指定するのでcenter
  ctx.textBaseline = 'top';
  ctx.textAlign = 'left';
  //座標を指定して文字を描く
  var x = x;
  var y = y;
  ctx.fillText(text.value, x, y);
}

