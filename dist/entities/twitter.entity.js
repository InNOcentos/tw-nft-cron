"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwitterEntity = void 0;
//import TwitterApiHelper from 'twitter-lite';
const twitter_api_v2_1 = require("twitter-api-v2");
const time_entity_1 = require("./time.entity");
class TwitterEntity {
    constructor(user) {
        this._twitterApi = new twitter_api_v2_1.TwitterApi({
            appKey: user.consumerKey,
            appSecret: user.consumerKeySecret,
            accessToken: user.accessToken,
            accessSecret: user.accessTokenSecret,
        });
    }
    get userData() {
        return this._twitterApi.currentUserV2();
    }
    async likeTweet(userId, tweetId) {
        var _a;
        return (_a = (await this._twitterApi.v2.like(userId, tweetId))) === null || _a === void 0 ? void 0 : _a.data;
        //return (
        //await this._twitterApiHelper.post(`users/${userId}/likes`, {
        //tweet_id: tweetId,
        //})
        //)?.data;
    }
    async replyTweet(tweetId, data) {
        var _a;
        return (_a = (await this._twitterApi.v2.reply(data, tweetId))) === null || _a === void 0 ? void 0 : _a.data;
        //return (
        //await this._twitterApiHelper.post(`tweets`, {
        //reply: {
        //in_reply_to_tweet_id: tweetId,
        //},
        //text: data,
        //})
        //)?.data;
    }
    async retweet(userId, tweetId) {
        var _a;
        return (_a = (await this._twitterApi.v2.retweet(userId, tweetId))) === null || _a === void 0 ? void 0 : _a.data;
        //return (
        //await this._twitterApiHelper.post(`users/${userId}/retweets`, {
        //tweet_id: tweetId,
        //})
        //)?.data;
    }
    async followUser(myUserId, userId) {
        var _a;
        return (_a = (await this._twitterApi.v2.follow(myUserId, userId))) === null || _a === void 0 ? void 0 : _a.data;
        //return (
        //await this._twitterApiHelper.post(`users/${userId}/following`, {
        //target_user_id: userId,
        //})
        //)?.data;
    }
    async getUsersIdsByNames(userNames) {
        var _a;
        if (!userNames.length)
            return [];
        return (_a = (await this._twitterApi.v2.usersByUsernames(userNames))) === null || _a === void 0 ? void 0 : _a.data;
        //let resource = `users/by?usernames=`;
        //userNames.forEach((userName: string, idx: number, self: string[]) => {
        //resource += userName;
        //if (idx !== self.length - 1) resource += ',';
        //});
        //return (await this._twitterApiHelper.get(resource))?.data;
    }
    async getUserFollowings(userId) {
        var _a;
        return (_a = (await this._twitterApi.v2.following(userId))) === null || _a === void 0 ? void 0 : _a.data;
        //return (await this._twitterApiHelper.get(`users/${userId}/following`))?.data;
    }
    async getUserTweets(userId) {
        var _a;
        let time = time_entity_1.TimeEntity.of(new Date()).date.subtract(15, 'minutes').toISOString();
        return (_a = (await this._twitterApi.v2.userTimeline(userId, { start_time: time }))) === null || _a === void 0 ? void 0 : _a.data;
        //return (await this._twitterApiHelper.get(`users/${userId}/tweets?tweet.fields=created_at`))?.data;
    }
}
exports.TwitterEntity = TwitterEntity;
//# sourceMappingURL=twitter.entity.js.map