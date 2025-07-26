# Gemini Assistant 設定

## 基本原則
- **応答言語:** 原則日本語（効率が大きく上がる場合は英語も可）。
- **ドキュメント作成:** 必要に応じてMarkdown形式のドキュメントを作成し、作業の進行や設定内容を明確にする。

## 環境
- **OS:** Windows (cmd.exeを使用。特にGit操作時に留意)。

## Git操作ガイドライン

### コミットワークフロー (Windows特有)
- コミットメッセージはファイルベース (`-F` オプション) で行います。
- `COMMIT_MSG.tmp` にメッセージを書き込み、`git commit -F COMMIT_MSG.tmp` を実行します。
- `COMMIT_MSG.tmp` は削除不要（`.gitignore` で設定済み）。

### プロジェクトSSH設定
- SSHクライアント設定ファイル (`%USERPROFILE%\.ssh\config`) に `Host github-ai-my` が `https://github.com/ai-my/note` に対応するように正しく設定されていることを前提とします。
- AIはSSH設定ファイルを直接編集しません。
- SSH接続エラー時、AIはユーザーにSSH設定の確認を促します。

### コマンド例
```sh
git clone git@github-ai-my:ai-my/note.git
git fetch origin
git pull origin main
git push origin main
```