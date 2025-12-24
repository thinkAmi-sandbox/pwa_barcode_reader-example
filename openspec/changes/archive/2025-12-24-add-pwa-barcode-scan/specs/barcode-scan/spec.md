## ADDED Requirements
### Requirement: QRとEAN-13のカメラ読み取り
システムは、AndroidのChromeにおいて標準Web APIを用いたQRコードとEAN-13バーコードのカメラ読み取りを提供しなければならない（SHALL）。

#### Scenario: 読み取り開始
- **WHEN** ユーザーが読み取り操作を行い、カメラ権限を許可する
- **THEN** ライブカメラプレビューが表示され、ストリームからコードを検出する

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
