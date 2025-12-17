# React+Vite SPA Frontend App

## プロジェクト概要

Vite + React 19 を使用したモダンな SPA フロントエンドアプリケーション

## アーキテクチャ

### コアテクノロジー

- **React**: v19.2.0 (最新版)
- **TypeScript**: v5.9.3
- **Vite**: rolldown-vite@7.2.5 (実験的バンドラー)
- **Node.js**: v22.12.0

### UI ライブラリ

- **Tailwind CSS**: v3.4.19 - ユーティリティファースト CSS フレームワーク
- **shadcn/ui**: 再利用可能なコンポーネントライブラリ
  - Radix UI ベース
  - カスタマイズ可能
  - アクセシビリティ対応

### 開発ツール

- **ESLint**: v9.39.2 - コード品質チェック
  - eslint-plugin-react-hooks
  - eslint-plugin-react-refresh
  - typescript-eslint
  - eslint-config-prettier
- **Prettier**: v3.7.4 - コードフォーマッター
- **Husky**: v9.1.7 - Git フック管理
- **lint-staged**: v16.2.7 - ステージングファイルへの lint 実行

### テスト環境

- **Vitest**: v4.0.16 - ユニットテスト
- **@testing-library/react**: v16.3.1 - React コンポーネントテスト
- **@testing-library/user-event**: v14.6.1 - ユーザーインタラクションテスト
- **@testing-library/jest-dom**: v6.9.1 - DOM マッチャー
- **happy-dom**: v20.0.11 - テスト用 DOM 環境
- **@vitest/coverage-v8**: v4.0.16 - カバレッジレポート

### Storybook

- **Storybook**: v10.1.9 - コンポーネント開発環境
- **@storybook/react-vite**: Vite 統合
- **@storybook/addon-a11y**: アクセシビリティチェック
- **@storybook/addon-docs**: ドキュメント生成

### CI/CD

- **GitHub Actions**: 自動化された CI/CD
  - Lint チェック
  - 型チェック
  - テスト実行
  - フォーマットチェック
  - ビルド確認

### プロジェクト構成

```
vite-react-front/
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions CI設定
├── react-app/              # メインアプリケーション
│   ├── .husky/             # Git フック
│   │   ├── pre-commit      # コミット前チェック
│   │   └── commit-msg      # コミットメッセージ検証
│   ├── .storybook/         # Storybook設定
│   ├── src/
│   │   ├── components/     # コンポーネント
│   │   │   ├── ui/         # shadcn/uiコンポーネント
│   │   │   └── ...
│   │   ├── lib/            # ユーティリティ
│   │   ├── stories/        # Storybookストーリー
│   │   ├── App.tsx         # ルートコンポーネント
│   │   ├── main.tsx        # エントリーポイント
│   │   └── index.css       # グローバルスタイル
│   ├── public/             # 静的アセット
│   ├── .nvmrc              # Node.jsバージョン指定
│   ├── .prettierrc         # Prettier設定
│   ├── eslint.config.js    # ESLint設定
│   ├── tailwind.config.js  # Tailwind CSS設定
│   ├── vite.config.ts      # Vite設定
│   ├── vitest-setup.ts     # Vitestセットアップ
│   ├── tsconfig.json       # TypeScript設定
│   └── package.json        # 依存関係管理
└── README.md
```

## 🚀 開発環境構築手順

### 前提条件

- **Node.js**: v22.12.0 以上
- **npm**: v10.9.0 以上
- **Git**: v2.x 以上

### 1. リポジトリのクローン

```bash
git clone <repository-url>
cd vite-react-front
```

### 2. Node.js バージョンの設定

```bash
# nvmを使用している場合
cd react-app
nvm use  # .nvmrcに基づいて自動的に22.12に切り替わる

# 手動でインストールする場合
nvm install 22.12
nvm use 22.12
```

### 3. 依存関係のインストール

```bash
cd react-app
npm install
```

### 4. Husky の初期化

```bash
npm run prepare
```

### 5. 開発サーバー起動

```bash
npm run dev
```

ブラウザで http://localhost:5173/ を開く

## 📝 利用可能なコマンド

### 開発

```bash
npm run dev              # 開発サーバー起動
npm run build            # プロダクションビルド
npm run preview          # ビルド結果のプレビュー
```

### コード品質

```bash
npm run lint             # ESLintでコードチェック
npm run lint:fix         # ESLintで自動修正
npm run format           # Prettierでフォーマット
npm run format:check     # フォーマットチェック
```

### テスト

```bash
npm run test             # Vitestをwatchモードで実行
npm run test:ci          # Vitestを1回実行（CI用）
npm run coverage         # カバレッジレポート生成
```

### Storybook

```bash
npm run storybook        # Storybook起動（http://localhost:6006）
npm run build-storybook  # Storybookビルド
```

## 🎨 shadcn/ui コンポーネントの追加

```bash
# ボタンコンポーネントを追加
npx shadcn@latest add button

# カードコンポーネントを追加
npx shadcn@latest add card

# 複数のコンポーネントを一度に追加
npx shadcn@latest add button card dialog
```

## 🔧 技術的な特徴

### Import Alias

`@/` エイリアスで `src/` ディレクトリにアクセス可能：

```typescript
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
```

### Git フック

- **pre-commit**: コミット前に lint とフォーマットを自動実行
- **commit-msg**: コミットメッセージの検証（オプション）

### CI/CD

GitHub Actions で以下を自動実行：

1. ESLint チェック
2. TypeScript 型チェック
3. Prettier フォーマットチェック
4. Vitest テスト実行
5. プロダクションビルド

### その他の特徴

- **ES Modules**: モジュールシステムとして ESM を採用
- **厳格な型チェック**: TypeScript strict モード有効
- **モダンな JavaScript**: ES2022 ターゲット
- **高速な HMR**: SWC による超高速 Fast Refresh
- **実験的 Rolldown**: Vite の次世代バンドラーを試験的に使用
- **CSS Variables**: Tailwind CSS + CSS 変数によるテーマカスタマイズ

## 🐛 トラブルシューティング

### Node.js のバージョンエラー

```bash
# nvmで正しいバージョンに切り替え
cd react-app
nvm use
```

### Tailwind CSS が反映されない

```bash
# 開発サーバーを再起動
# Ctrl+C で停止してから
npm run dev
```

### ESLint エラー

```bash
# 自動修正を試す
npm run lint:fix

# それでも解決しない場合はnode_modulesを再インストール
rm -rf node_modules package-lock.json
npm install
```
