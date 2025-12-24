# 変更: Service Workerの削除

## Why
オフライン起動は不要で、PWAとしてインストールできれば十分なため、Service Workerを削除して構成を簡素化したい。

## What Changes
- Service Workerの提供をやめる。
- インストール要件をマニフェスト中心の構成に変更する。

## Impact
- 影響する仕様: pwa-shell
- 影響するコード: Service Worker登録、sw.js
