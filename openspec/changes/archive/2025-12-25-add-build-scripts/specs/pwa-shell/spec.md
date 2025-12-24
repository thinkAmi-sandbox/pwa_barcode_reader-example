## ADDED Requirements
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
