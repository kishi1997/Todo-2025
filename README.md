<!-- Docker Compose を使ったセットアップ -->

## Docker Compose でアプリケーションを起動

```sh
docker-compose up --build
```

## コンテナの停止

```sh
docker-compose down
```

<!-- composeファイル作成するまでのセットアップ手順（メモとして残し） -->

## Set Up

## Docker イメージをビルド

```sh
docker build -t my-todo-app .
```

## コンテナを実行（ポート 3000 でアクセス可能に）

```sh
docker run -p 3000:3000 my-todo-app
```

## スタートしたコンテナをストップさせたい時

## 下記コマンドで現在実行中のコンテナを確認し、NAMES を確認

```sh
docker ps
```

## ストップ

```sh
docker stop 　[ 確認したコンテナ名 ]
```
