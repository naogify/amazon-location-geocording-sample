#!/usr/bin/env node

// 必要なモジュールをインポート
const {
    Location
} = require("@aws-sdk/client-location");

// Amazon Location Serviceを初期化
const locationService = new Location({
    region: 'ap-northeast-1',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

// ジオコーディング処理
async function geocodeAddress(address) {
    const params = {
        IndexName: 'NaokiSamplePlaceIndex', // Amazon Location Serviceで作成したインデックスの名前
        Text: address,
        Language: 'ja',
    };

    try {
        const response = await locationService.searchPlaceIndexForText(params);
        if (response.Results.length > 0) {
            const coordinates = response.Results[0].Place.Geometry.Point;
            console.log(`緯度: ${coordinates[1]}, 経度: ${coordinates[0]}`);
        } else {
            console.log('結果が見つかりませんでした。');
        }
    } catch (error) {
        console.error('エラーが発生しました:', error);
    }
}

// ジオコーディングを行いたい住所を指定
const address = '東京都千代田区丸の内１丁目';
geocodeAddress(address);
