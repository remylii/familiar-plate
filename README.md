frontbase
===========

This is toolkit for front-side develop. use gulp.

## tasks

* build
* clean
* default
* htmlhint
* htmlmin
* imagecopy
* imagemin
* jade
* sass
* scsslint(disabled)
  * stylelint (postcss::pluginsと共存)
* sprite
* watch

## todo

* js
* browser-sync

### postcss

example.)

|plugins|description|
| :--- | :--- |
| stylelint | cssの構文チェック |
| postcss-reporter | stylelintのログを見やすく |
| postcss-cson-cssvars | cssないで使える変数をcsonファイルで設定 |
| postcss-assets | より良い画像アセット読み込み関数を追加 |
| postcss-property-lookup | 同じルールないのプロパティ値に、`@xxx`のような形で利用できる |
| postcss-animation | aminate.cssで定義されている名前をanimationに指定するだけで使える |
| postcss-easings | transition-timing-functionにeasings.netにあるものを追加 |
| lost | グリッドシステムなプロパティを追加 |
| postcss-selector-not | css4シンタックスの:notが使える |
| postcss-preref | 前回のセレクタを&で使える |
| postocss-namespace | セレクターにプレフィックスをつける |
| doiuse | caniuseを元に、サポート対象ブラウザが対応していないプロパティを使っていると警告 |
| autoprefixer | 自動でベンダープレフィックス付与 |
| css-mqpacker | @mediaの最適化 |
| cssnano | cssの最適化 |
