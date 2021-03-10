# nextjs-tailwindcss-typescript

## 使用技術(Frontend)

- [React](https://ja.reactjs.org/)
  - Facebook 製 UI ライブラリ。
- [Next.js](https://nextjs.org/)
  - React のフレームワーク。
- [TypeScript](https://www.typescriptlang.org/)
  - 型を使うことでバグを防いだり、ドキュメント代わりになったり、チーム開発において便利。
- [ESLint](https://eslint.org/)
  - コードを分析し問題点を指摘してくれるツール。これがあることでメンバー同士のコード差異が少なくなったり、独自ルールを追加して書き方を統一できる。
- [Prettier](https://prettier.io/)
  - コードフォーマッター。改行やクォーテーションなどを統一できる。ESLint とあわせて使うのが一般的で、ESLint だけでは実現できない部分をカバーする。
- [Jest](https://jestjs.io/ja/)
  - Facebook 製の JavaScript のテスティングフレームワークです。テストに関する様々な機能を提供しており、ドキュメントも豊富かつ実績もある。

## セットアップ

### リポジトリのクローン

コマンドで行う場合

```
git clone https://github.com/TakashiYano/nextjs-tailwindcss-typescript.git
```

VS Code で行う場合は、リポジトリをクローンする（英語だと Clone Repository）というボタンがあるので、それをクリックして、`https://github.com/TakashiYano/nextjs-tailwindcss-typescript.git` を入力してエンターを押す。

### 依存関係のインストール

ターミナルを開き、下記コマンドで依存関係をインストールする。以上で、環境構築は完了。

```
yarn
```

## 開発する

開発を行う場合

```
yarn dev // localhost:3000 で立ち上がる
```

本番の動作確認を行う場合

```
yarn build
yarn start // localhost:3000 で立ち上がる。dev中はportを変える必要がある。
```
