## MODIFIED Requirements
### Requirement: QRとEAN-13のカメラ読み取り
システムは、AndroidのChromeにおいて標準Web APIを用いたQRコードとEAN-13バーコードのカメラ読み取りを提供しなければならない（SHALL）。

#### Scenario: 読み取り開始
- **WHEN** ユーザーが読み取り操作を行い、カメラ権限を許可する
- **THEN** ライブカメラプレビューが表示され、ストリームからコードを検出する

#### Scenario: 読み取り枠内限定
- **WHEN** ユーザーがプレビュー枠内にコードを合わせる
- **THEN** システムは枠内に対応する領域のみを検出対象とする
