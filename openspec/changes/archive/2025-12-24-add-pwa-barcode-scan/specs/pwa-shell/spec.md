## ADDED Requirements
### Requirement: インストール可能なPWAシェル
システムは、AndroidのChromeでインストール可能となるPWAマニフェストを提供しなければならない（SHALL）。

#### Scenario: インストール条件
- **WHEN** アプリがHTTPSで配信され、有効なマニフェストを含む
- **THEN** AndroidのChromeでPWAとしてインストールできる

### Requirement: オフラインのアプリシェル
システムは、オフラインでもUIが起動できるようアプリシェルをキャッシュしなければならない（SHALL）。

#### Scenario: オフライン起動
- **WHEN** 端末がオフラインで、アプリが一度以上起動されている
- **THEN** アプリシェルが読み込まれ、読み取りには接続が必要である旨が通知される

### Requirement: 最小権限
システムは、ユーザーが読み取りを開始するまでカメラ権限を要求してはならない（SHALL NOT）。

#### Scenario: 初回起動
- **WHEN** アプリを開く
- **THEN** ユーザーが読み取りを開始するまでカメラ権限のダイアログは表示されない
