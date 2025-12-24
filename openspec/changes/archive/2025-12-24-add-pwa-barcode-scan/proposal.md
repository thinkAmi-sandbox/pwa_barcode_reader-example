# 変更: QRコードとEAN-13のPWAスキャナー追加

## Why
AndroidのChromeで動作する最小限のPWAで、QRコードとEAN-13（ISBN）バーコードを読み取り、復号値を表示したい。

## What Changes
- オフライン対応と最小権限のPWAアプリシェルを追加する。
- 標準Web APIのみでQRコードとEAN-13のカメラ読み取りを追加する。
- 読み取った値を画面に表示する。

## Impact
- 影響する仕様: barcode-scan, pwa-shell
- 影響するコード: 新規PWAフロントエンド、Service Worker、マニフェスト
