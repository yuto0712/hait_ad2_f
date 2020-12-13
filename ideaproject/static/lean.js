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
function drawText(canvas_id, text_id, x, y, len)
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
  //何文字で改行するか指定
  var len = len;
  //入力文字を1文字毎に配列化
	var aryText = text.value.split('');
	//出力用の配列を用意
	var aryRow = [];
	aryRow[0] = '';
	var row_cnt = 0;
	//入力1文字毎にループ　改行コードもしくは折り返しで配列の添え字を足す
	for(var i = 0; i < aryText.length; i++){
		var ary_text = aryText[i];
    if(aryRow[row_cnt].length >= len){
			row_cnt++;
			aryRow[row_cnt] = '';
		}
		if(ary_text == "\n"){
			row_cnt++;
			aryRow[row_cnt] = '';
			ary_text = '';
		}
		aryRow[row_cnt] += ary_text;
	}
  //文字の表示　y軸とx軸をループする
  var font_size = 13
	for(var i = 0; i < aryRow.length; i++){
		aryStr = aryRow[i].split('');
		for(var j = 0; j < aryStr.length; j++){
			ctx.fillText(aryStr[j], x + (j * font_size), y + (i * font_size));
		}
  }
  alert('リーンキャンバスに内容を書き込みました。');
}
//リセット機能
function resetText(canvas_id, text_id, x, y, width, height) {
  var canvas = document.getElementById(canvas_id);
  var ctx = canvas.getContext('2d');
  //座標と範囲を決める
  var x = x;
  var y = y;
  var width = width;
  var height = height;
  //キャンバスの内容を白で塗りつぶす
  ctx.fillStyle = "white";
  ctx.fillRect(x, y, width, height);
  //textarea内の文字を消去
  var reset_target = document.getElementById(text_id);
  if(reset_target.value == ''){
      alert('すでにリセットされています。');
  }else{
      reset_target.value = '';
  };
}
//画像ダウンロード（ローカルではうまく機能しない）
function saveCanvas(canvas_id)
{
	var canvas = document.getElementById(canvas_id);
	var uri = canvas.toDataURL('image/jpeg', 0.85);
	if (canvas.msToBlob) { //IE対応
		var blob = toBlob(uri);
		window.navigator.msSaveBlob(blob, 'download.jpg');
	} else {
		//アンカータグを作成
		var a = document.createElement('a');
		a.href = uri;
    a.download = 'download.jpg';
    //クリックイベントを発生させる
		a.click();
  }
  
}
