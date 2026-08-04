# Copilot Instructions

## Project overview
- 静的な 1 ページのコーポレートサイト。UI フレームワークは使用していない。
- ページの実体は [index.html](index.html) のみ。HTML・CSS（`<style>`）・JS（`<script>`）をすべて 1 ファイルに内包している。
- Vite はバンドラーではなく開発サーバー / 静的ビルドとしてのみ利用（[vite.config.js](vite.config.js)、`base: "/"`）。
- そのまま配信する静的ファイルは [public/](public/)（favicon、サービス資料 PDF）。`/favicon.png` のようにルート絶対パスで参照する。
- [src/assets/](src/assets/) は旧 React 版で使っていた画像素材で、現在はどこからも参照していない。

## Key workflows
- Dev server: `npm run dev`
- Production build: `npm run build`
- Preview build: `npm run preview`
- Lint: `npm run lint`（対象は設定ファイルなどの `.js` のみ）

## Conventions and patterns (from current code)
- CSS は `:root` のカスタムプロパティ（`--deep` / `--orange` / `--blue` など）を起点に定義する。色をハードコードせずこの変数を使う。
- スクロール連動の表示は `.rv` クラス＋`IntersectionObserver` の共通処理に乗せる（遅延は `.d1`〜`.d4`）。
- アニメーションを追加したら `@media(prefers-reduced-motion:reduce)` ブロックにも無効化の記述を足す。
- 装飾専用の要素には `aria-hidden="true"` を付ける。
- ビルド成果物 `dist/` はコミットしない。

## Integration points
- 外部依存は Google Fonts（Noto Sans JP / Inter / JetBrains Mono）のみ。それ以外の CDN は使わない。
- `develop` への push で [.github/workflows/deploy.yml](.github/workflows/deploy.yml) が `npm ci && npm run build` を実行し、`dist` を GitHub Pages に公開する。
