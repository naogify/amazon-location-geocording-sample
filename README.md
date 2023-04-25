# amazon-location-geocording-sample

##  1. インデックスを作成

インデックス（ジオコーディングの為の設定）を作成する。データプロバイダーや検索結果を、保存するか等を決めることができる。

- https://ap-northeast-1.console.aws.amazon.com/location にアクセス

![スクリーンショット 2023-04-25 23 24 58](https://user-images.githubusercontent.com/8760841/234309824-5ac6b141-282b-4590-b75d-e04c16fde08a.png)
![スクリーンショット 2023-04-25 23 25 51](https://user-images.githubusercontent.com/8760841/234309922-8b1c72b8-de02-4e8e-ab83-0aa9183ec644.png)
![スクリーンショット 2023-04-25 23 31 41](https://user-images.githubusercontent.com/8760841/234310033-05d041d0-5c15-4d9e-aab1-25442ee19b30.png)

## 2. クレデンシャル情報を作成する

https://us-east-1.console.aws.amazon.com/iamv2/home#/users にアクセスし、サイドバーの 「アクセス管理」 > 「ユーザー」 から、ユーザーを作成する。
![スクリーンショット 2023-04-25 23 48 31](https://user-images.githubusercontent.com/8760841/234319207-6aa2ae1c-7960-4d8e-bf4d-6afba68ae9ba.png)

![スクリーンショット 2023-04-25 23 50 49](https://user-images.githubusercontent.com/8760841/234319236-e097bafb-caf2-4bad-983c-d1ab23439440.png)
![スクリーンショット 2023-04-25 23 51 36](https://user-images.githubusercontent.com/8760841/234319270-dd40966c-2ef8-4e19-a5b1-b14efcea5599.png)
![スクリーンショット 2023-04-25 23 52 07](https://user-images.githubusercontent.com/8760841/234319304-5bd4a137-c288-4e9b-b615-dc1fd1d0c024.png)
![スクリーンショット 2023-04-25 23 53 09](https://user-images.githubusercontent.com/8760841/234319325-55f80c72-961f-4f8a-8079-f801c3001f43.png)
![スクリーンショット 2023-04-25 23 54 16](https://user-images.githubusercontent.com/8760841/234319388-36d62d74-f55d-4766-b8e9-fcffdc3ad2e9.png)
![スクリーンショット 2023-04-25 23 55 39](https://user-images.githubusercontent.com/8760841/234319411-4453d21d-fb20-4b6e-b7a0-36efebd6838d.png)


## 3.クレデンシャル情報とインデックス名を追加

- script 内の `IndexName` にインデックス名を追加
- .envrc に アクセスキーとシークレットアクセスキーを追加

## 参考
- https://style.potepan.com/articles/35403.html
- https://qiita.com/kzykmyzw/items/ca0c3276dfebb401f7d8
- https://docs.aws.amazon.com/ja_jp/location/latest/developerguide/search-place-index-geocoding.html
