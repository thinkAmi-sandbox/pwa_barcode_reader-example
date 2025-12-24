# Change: Service Workerのキャッシュを廃止し最小構成にする

## Why
アプリ更新時に古いキャッシュが残り、最新の状態が反映されない問題が発生したため。オフライン起動は不要という前提で、最小構成に切り替える。

## What Changes
- **BREAKING** Service Workerのアプリシェルキャッシュを廃止する
- Service Workerをインストール可能判定を満たす最小構成（fetchのパススルー）に変更する

## Impact
- Affected specs: pwa-shell
- Affected code: public/sw.js, src/app.ts（登録処理の整理が必要な場合）
