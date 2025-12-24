# pwa-shell Specification

## Purpose
TBD - created by archiving change add-pwa-barcode-scan. Update Purpose after archive.
## Requirements
### Requirement: インストール可能なPWAシェル
システムは、AndroidのChromeでインストール可能となるPWAマニフェストを提供しなければならない（SHALL）。

#### Scenario: インストール条件
- **WHEN** アプリがHTTPSで配信され、有効なマニフェストを含む
- **THEN** AndroidのChromeでPWAとしてインストールできる

### Requirement: 最小権限
システムは、ユーザーが読み取りを開始するまでカメラ権限を要求してはならない（SHALL NOT）。

#### Scenario: 初回起動
- **WHEN** アプリを開く
- **THEN** ユーザーが読み取りを開始するまでカメラ権限のダイアログは表示されない

### Requirement: 上下2段の固定レイアウト
システムは、縦持ちの画面内にプレビュー領域を上段、操作と結果表示を下段に配置する固定レイアウトを提供しなければならない（SHALL）。

#### Scenario: 画面内に収まる配置
- **WHEN** 端末を縦持ちで表示する
- **THEN** プレビューと操作エリアがスクロール無しで1画面に収まる

### Requirement: 上部ヘッダーの省略
システムは、画面上部のタイトルや説明文を表示しない構成を提供しなければならない（SHALL）。

#### Scenario: ヘッダー表示
- **WHEN** ユーザーがアプリを開く
- **THEN** タイトルや説明文のヘッダーは表示されない

### Requirement: ビルドスクリプトの提供
システムは、TypeScriptのビルドを実行する標準スクリプトを提供しなければならない（SHALL）。

#### Scenario: ビルド実行
- **WHEN** ユーザーが `npm run build` を実行する
- **THEN** `tsc -p tsconfig.json` が実行され、成果物が更新される

### Requirement: 整形スクリプトの提供
システムは、コード整形を実行する標準スクリプトを提供しなければならない（SHALL）。

#### Scenario: 整形実行
- **WHEN** ユーザーが `npm run format` を実行する
- **THEN** `biome check --write .` が実行される

