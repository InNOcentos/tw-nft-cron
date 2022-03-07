"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const twitter_service_1 = require("./twitter.service");
const config_1 = __importDefault(require("./config"));
const user_entity_1 = require("./entities/user.entity");
const twitter_entity_1 = require("./entities/twitter.entity");
async function run() {
    try {
        const { consumerKey, consumerKeySecret, accessToken, accessTokenSecret } = config_1.default.user;
        const userEntity = new user_entity_1.UserEntity(consumerKey, consumerKeySecret, accessToken, accessTokenSecret);
        const twitterEntity = new twitter_entity_1.TwitterEntity(userEntity);
        const { id, username } = (await twitterEntity.userData).data;
        const twitterService = new twitter_service_1.TwitterService();
        const { tweets } = await twitterService.followUsers(twitterEntity, id);
        await twitterService.likeReplyRetweet(twitterEntity, tweets, id);
    }
    catch (err) {
        console.log(err);
    }
}
run();
//# sourceMappingURL=main.js.map