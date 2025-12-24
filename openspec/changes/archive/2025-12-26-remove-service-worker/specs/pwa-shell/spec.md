## MODIFIED Requirements
### Requirement: インストール可能なPWAシェル
システムは、AndroidのChromeでインストール可能となるPWAマニフェストを提供しなければならない（SHALL）。

#### Scenario: インストール条件
- **WHEN** アプリがHTTPSで配信され、有効なマニフェストを含む
- **THEN** AndroidのChromeでPWAとしてインストールできる
