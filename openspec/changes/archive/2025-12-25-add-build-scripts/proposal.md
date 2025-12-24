# 変更: ビルドと整形のスクリプト追加

## Why
手動で実行していたビルドと整形を明示的なスクリプトとして用意し、メンテナンス性を高めたい。

## What Changes
- `build` スクリプトでTypeScriptのビルドを実行する。
- `format` スクリプトでBiomeによる整形を実行する。
- 手動手順をスクリプト化して再現性を高める。

## Impact
- 影響する仕様: pwa-shell
- 影響するコード: package.json
