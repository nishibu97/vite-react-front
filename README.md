# React+Vite SPA Frontend App

## 📋 プロジェクト概要

Vite + React 19 を使用したモダンな SPA フロントエンドアプリケーション

## 🏗️ 現在のアーキテクチャ

### コアテクノロジー

- **React**: v19.2.0 (最新版)
- **TypeScript**: v5.9.3
- **Vite**: rolldown-vite@7.2.5 (実験的バンドラー)
- **Node.js**: v22.12

### ビルド & 開発ツール

- **Fast Refresh**: @vitejs/plugin-react-swc (SWC ベース)
- **Linter**: ESLint v9.39.1
  - eslint-plugin-react-hooks
  - eslint-plugin-react-refresh
  - typescript-eslint
- **TypeScript 設定**:
  - Target: ES2022
  - JSX: react-jsx
  - Strict mode: 有効
  - Module Resolution: bundler

### プロジェクト構成

```
vite-react/
├── react-app/              # メインアプリケーション
│   ├── src/
│   │   ├── App.tsx         # ルートコンポーネント
│   │   ├── main.tsx        # エントリーポイント
│   │   └── assets/         # 静的リソース
│   ├── public/             # パブリックアセット
│   ├── vite.config.ts      # Vite設定
│   ├── tsconfig.json       # TypeScript設定
│   └── package.json        # 依存関係管理
└── README.md
```

## 🎯 計画中の技術スタック

### UI ライブラリ (未実装)

- [ ] shadcn/ui - 再利用可能なコンポーネントライブラリ
- [ ] Tailwind CSS - ユーティリティファースト CSS フレームワーク

### 開発ツール (未実装)

- [ ] Storybook - コンポーネント開発環境
- [ ] Husky - Git フック管理
- [ ] Vitest - ユニットテスト
- [ ] Valibot - バリデーションライブラリ

## 🚀 セットアップ手順

### 1. Node.js のアップグレード (必須)

```bash
# nvm使用時
nvm install 22.12
nvm use 22.12
```

### 2. 依存関係のクリーンインストール

```bash
cd react-app
rm -rf node_modules package-lock.json
npm install
```

### 3. 開発サーバー起動

```bash
npm run dev
```

## 📝 利用可能なコマンド

```bash
npm run dev      # 開発サーバー起動
npm run build    # プロダクションビルド
npm run preview  # ビルド結果のプレビュー
npm run lint     # ESLintでコードチェック
```

## 🔧 技術的な特徴

- **ES Modules**: モジュールシステムとして ESM を採用
- **厳格な型チェック**: TypeScript strict モード有効
- **モダンな JavaScript**: ES2022 ターゲット
- **高速な HMR**: SWC による超高速 Fast Refresh
- **実験的 Rolldown**: Vite の次世代バンドラーを試験的に使用
