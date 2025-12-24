# barcode-scan Specification

## Purpose
TBD - created by archiving change add-pwa-barcode-scan. Update Purpose after archive.
## Requirements
### Requirement: QRとEAN-13のカメラ読み取り
システムは、AndroidのChromeにおいて標準Web APIを用いたQRコードとEAN-13バーコードのカメラ読み取りを提供しなければならない（SHALL）。

#### Scenario: 読み取り開始
- **WHEN** ユーザーが読み取り操作を行い、カメラ権限を許可する
- **THEN** ライブカメラプレビューが表示され、ストリームからコードを検出する

#### Scenario: 読み取り枠内限定
- **WHEN** ユーザーがプレビュー枠内にコードを合わせる
- **THEN** システムは枠内に対応する領域のみを検出対象とする

### Requirement: 復号値の表示
システムは、検出されたQRコードまたはEAN-13バーコードの復号値を画面に表示しなければならない（SHALL）。

#### Scenario: QRコードの値
- **WHEN** 文字列「Hello, world!」を含むQRコードが検出される
- **THEN** UIに「Hello, world!」がそのまま表示される

#### Scenario: EAN-13の値
- **WHEN** EAN-13バーコードが検出される
- **THEN** 13桁の数値がUIに表示される

### Requirement: 読み取り可否の通知
システムは、ブラウザの対応不足により読み取りが利用できない場合にその旨を通知しなければならない（SHALL）。

#### Scenario: 読み取りAPI非対応
- **WHEN** ブラウザが必要な読み取りAPIに対応していない
- **THEN** UIに読み取りが利用できない旨のメッセージが表示される

### Requirement: 読み取り結果のクリア
システムは、読み取り結果のみをクリアできるボタンを提供しなければならない（SHALL）。

#### Scenario: クリア操作
- **WHEN** ユーザーがクリアボタンを押す
- **THEN** 読み取り結果が初期表示に戻る
- **AND** ステータスメッセージと読み取り状態は変化しない

### Requirement: クリアボタンの常時利用
システムは、クリアボタンを常に利用可能な状態にしなければならない（SHALL）。

#### Scenario: 未検出時の操作
- **WHEN** 読み取り結果が未検出の状態
- **THEN** クリアボタンは無効化されない

### Requirement: 読み取り枠の高さ
システムは、読み取り枠の高さをプレビュー表示領域の約1/3に保たなければならない（SHALL）。

#### Scenario: 枠の高さ
- **WHEN** ユーザーがプレビュー画面を開く
- **THEN** 読み取り枠の高さはプレビュー表示領域の約1/3である

