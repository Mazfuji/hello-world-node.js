# hello-world

シンプルなNode.js APIで、JSON `{"message": "Hello World!"}` を返します。
PM2を使用してMP2（Multi-Process 2）を実装しており、CPUコア数に応じたワーカープロセスを自動的に起動します。

## セットアップ

依存関係をインストールします：

```bash
npm install
```

## ローカルでの実行

アプリケーションをローカルで実行するには：

### 通常の起動
```bash
node app.js
```

または

```bash
npm start
```

### PM2を使用した起動（推奨）
```bash
npm run start:pm2
```

または

```bash
pm2 start app.js --name hello-app
```

アプリケーションは `http://localhost:8000` でアクセス可能です。

## PM2コマンド

PM2を使用したアプリケーションの管理：

```bash
# アプリケーションの状態確認
pm2 status

# アプリケーションの再起動
pm2 restart hello-app

# アプリケーションの停止
pm2 stop hello-app

# ログの確認
pm2 logs hello-app

# モニタリング
pm2 monit
```

## アーキテクチャ

- PM2マネージャー：ワーカープロセスの管理と監視を担当
- ワーカープロセス：CPUコア数に応じて自動的に起動
- 自動リカバリー：ワーカープロセスが異常終了した場合、自動的に新しいワーカーを起動
- ログ管理：各ワーカーのログを自動的に収集・管理

## Systemdサービス

`hello-world.service` が提供されています。以下のコマンドでインストールできます：

```bash
sudo ./install_service.sh
```

サービスはポート8000でリッスンします。サービスを管理するには：

```bash
# サービスの開始
sudo systemctl start hello-world

# サービスの停止
sudo systemctl stop hello-world

# サービスの状態確認
sudo systemctl status hello-world

# システム起動時に自動起動を有効化
sudo systemctl enable hello-world
```
