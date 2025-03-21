# 自己環境のnodeのバージョン以下で最新かつ軽量のものを使用
FROM node:18-alpine
# 作業ディレクトリを設定
# •目的: DockerfileでWORKDIRを指定することで、その後のすべてのコマンド（RUN, COPY, CMDなど）が指定した作業ディレクトリで実行されるようになる。
# これにより、作業場所が明確になり、ファイル操作が適切なディレクトリ内で行われるためdockerfile,docker-compose両方のファイルで設定している
# •	DockerfileのWORKDIRは、イメージをビルドする際に、どのディレクトリを基準にファイルを配置したりコマンドを実行するかを決定します。
# •	docker-compose.ymlのworking_dirは、コンテナが実際に起動した後、どのディレクトリを基準にコマンドを実行するかを決定します。
# •	これにより、ビルド時と実行時の両方で一貫性が保たれ、予期しないエラーが防げます。
WORKDIR /app
# パッケージをインストール
COPY package*.json ./
# 依存関係をインストール
RUN npm install
# アプリケーションのソースをコピー
COPY . .