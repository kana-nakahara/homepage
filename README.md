# UNITARY コーポレートサイト

株式会社 UNITARY のコーポレートサイト。単一の静的 HTML（[index.html](index.html)）で構成され、Vite でビルドして GitHub Pages に公開しています。

## 構成

- [index.html](index.html) — トップページ全体（HTML / CSS / JS をすべて内包）。日本語が原文で、翻訳対象の要素に `data-i18n` / `data-i18n-attr` 属性を付けています
- [src/i18n.js](src/i18n.js) — 言語判定と英訳の適用、ヘッダーの JA / EN スイッチャー
- [src/i18n/en.js](src/i18n/en.js) — 英訳辞書（キー → HTML 断片）
- [public/saas/sales-management.html](public/saas/sales-management.html) — 販売管理システムのサービス資料ページ（トップの SaaS セクションからリンク）
- [public/](public/) — そのまま配信される静的ファイル（favicon、サービス資料 PDF、SaaS 資料ページ）
- [src/assets/](src/assets/) — 旧デザインで使用していた画像素材（現在は未使用）

## 日本語 / 英語の切り替え

言語は URL で決まります。無指定の場合は日本語です。

| URL | 言語 |
|---|---|
| `/` | 日本語（デフォルト） |
| `/en/` | 英語 |
| `/?lang=en` | 英語（クエリでも指定可。クエリがパスより優先） |

仕組み: `<head>` の小さなスクリプトが URL から言語を決めて `<html lang data-lang>` を設定し、[src/i18n.js](src/i18n.js) が `data-i18n` 付き要素の中身を [src/i18n/en.js](src/i18n/en.js) の英訳に差し替えます。英語のときは差し替え完了まで body を非表示にして日本語のちらつきを防いでいます。ビルド時は [vite.config.js](vite.config.js) のプラグインが `dist/index.html` を `dist/en/index.html` にコピーし、GitHub Pages で `/en/` が開けるようにしています。

文言を追加・変更するときは、index.html の日本語を直し、対応するキーを en.js に追加してください。キーが辞書に無い要素は日本語のまま表示され、コンソールに警告が出ます。SaaS / 開発事例の各資料ページ（public/ 配下）は日本語のみです。

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
