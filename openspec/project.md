# Project Context

## Purpose
PWAで動くバーコードリーダーを作成する

- 対応するバーコードは、QRコードとISBN

## Tech Stack

- Web標準APIを利用
- スマホのカメラ
- TypeScript

## Project Conventions

### Code Style

- Lint・FormatterはBiomeに従うものとする
  - コードを実装した後に、Biomeの実行を必ず行う

### Architecture Patterns
[Document your architectural decisions and patterns]

### Testing Strategy

実機での動作確認ができれば良いものとする


### Git Workflow

- `git commit` や `git push` はユーザーのみが行える
- `git diff` などの差分検知については、誰もが行って良い

### Language
- 仕様/設計/タスク/提案などのドキュメントは日本語で作成する
- ユーザーへの回答も日本語で行う

## Domain Context
[Add domain-specific knowledge that AI assistants need to understand]

## Important Constraints

- Biomeを実行してエラーが出なくなったら実装完了とみなす

## External Dependencies
[Document key external services, APIs, or systems]
