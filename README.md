# チーム内イベント参加者調整アプリケーション

## 環境構築

`yarn install`

`yarn start`

## AWS シークレット関係

以下のファイルは共有していません。

- aws-exports.js
  - /src/aws-exports.js
- .env
  - /.env
- team-provider-info.json
  - /amplify/team-provider-info.json
- custom-roles.json
  - amplify/backend/api/cpe/custom-roles.json

### シークレット対策

- init 時
  - `git secrets --install`
  - `git secrets --register-aws`
  - グローバル設定 `git secrets --register-aws --global`
