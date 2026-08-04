# UNITARY コーポレートサイト

株式会社 UNITARY のコーポレートサイト。単一の静的 HTML（[index.html](index.html)）で構成され、Vite でビルドして GitHub Pages に公開しています。

## 構成

- [index.html](index.html) — ページ全体（HTML / CSS / JS をすべて内包）
- [public/](public/) — そのまま配信される静的ファイル（favicon、サービス資料 PDF）
- [src/assets/](src/assets/) — 旧デザインで使用していた画像素材（現在は未使用）

外部依存は Google Fonts（Noto Sans JP / Inter / JetBrains Mono）のみです。

## コマンド

```bash
npm install
npm run dev      # 開発サーバー
npm run build    # dist/ に本番ビルド
npm run preview  # ビルド結果の確認
npm run lint     # ESLint
```

## デプロイ

`develop` ブランチへの push で [.github/workflows/deploy.yml](.github/workflows/deploy.yml) が走り、GitHub Pages に公開されます。
