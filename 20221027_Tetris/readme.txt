主な変更点


・9月8日
minoconfig.js
-各ミノの配列の1が存在する場所を調整しました

mino.js
-回転規則を変更しました(SuperRotation実装準備)
-putBlockやclearBlockなどのstageに設置する関数の一部を削除し、stage.jsで行うようにしました

stage.js
-関数名を変更しました
|->変更例:putBlock->putMino
-フレーム毎の処理をmove1frame関数内に記述するようにしました
-ライン消去時のエフェクトを実装しました
-ゲームオーバー時のエフェクトを実装しました
-フィールド変数にlevel,score,nextを持つようにしました

debug.js
-フレーム毎の処理の大半をstage.jsに移行しました

・10月11日

0908.html->game.html
-ファイル名をgame.htmlに変更しました
-styleタグに書かれていたものをstyle.cssへと移動させました

next.js
-関数printNextを追加しました。現在、printNext_debug関数内で呼び出しています
--printNext:nextのデータから次に出てくるブロックを6つまでgame.htmlのnextCanvasに描画する関数

