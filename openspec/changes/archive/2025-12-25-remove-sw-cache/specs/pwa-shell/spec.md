## MODIFIED Requirements
### Requirement: インストール可能なPWAシェル
システムは、AndroidのChromeでインストール可能となるPWAマニフェストとService Workerを提供しなければならない（SHALL）。

#### Scenario: インストール条件
- **WHEN** アプリがHTTPSで配信され、有効なマニフェストとService Workerを含む
- **THEN** AndroidのChromeでPWAとしてインストールできる

## REMOVED Requirements
### Requirement: オフラインのアプリシェル
**Reason**: オフライン起動は不要とし、更新の反映を優先するためキャッシュを廃止する。
**Migration**: Service Workerはネットワークパススルーのみとし、オフライン時は通常の失敗挙動とする。
