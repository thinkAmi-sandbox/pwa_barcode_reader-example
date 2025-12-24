# Change: 読み取り枠の高さを1/3に縮小する

## Why
EAN-13が上下に並ぶケースで、どのコードを読んでいるか分かりづらいため。枠の高さを縮めて読み取り対象を明確にする。

## What Changes
- 読み取り枠（overlay）の高さを現状の約1/3に変更する
- 枠はプレビュー中央に配置し、横幅は現状維持とする

## Impact
- Affected specs: barcode-scan
- Affected code: public/styles.css
