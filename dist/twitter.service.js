"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwitterService = void 0;
class TwitterService {
    constructor() { }
    async followUsers(twitter, myUserId) {
        const followings = await twitter.getUserFollowings(myUserId);
        const allTweets = [];
        for (let follow of followings) {
            const followTweets = await twitter.getUserTweets(follow === null || follow === void 0 ? void 0 : follow.id);
            allTweets.push(...followTweets.data);
        }
        const filteredTweets = this.filterTweets(allTweets);
        for (let tweet of filteredTweets) {
            const usersNames = this.getTweetUsersToFollow(tweet);
            const usersIds = await twitter.getUsersIdsByNames(usersNames);
            for (let userId of usersIds) {
                await twitter.followUser(myUserId, userId.id);
            }
        }
        return {
            tweets: filteredTweets,
        };
    }
    async likeReplyRetweet(twitter, tweets, userId) {
        // TODO: fix
        const data = '@tiobeipio @Xiao_Nai @JANniicee';
        for (let tweet of tweets) {
            await twitter.likeTweet(userId, tweet.id);
            await twitter.replyTweet(tweet.id, data);
            await twitter.retweet(userId, tweet.id);
        }
    }
    getTweetUsersToFollow(tweet) {
        return tweet.text.match(/@\w+/g).map((userName) => userName.replace(/@/g, ''));
    }
    filterTweets(tweets) {
        const conditions = [
            ['WL', 'WHITELIST', 'GIVEAWAY'],
            ['RT', 'RETWEET'],
        ];
        const parsed = tweets.filter((tweet, idx, self) => {
            //const nowDate = TimeEntity.of(new Date());
            //const tweetDate = TimeEntity.of(tweet.created_at);
            //const minDiff = TimeEntity.duration(nowDate, tweetDate);
            //if (minDiff >= 15) {
            //return false;
            //}
            return conditions.every((condition, idx, arr) => {
                return condition.some((option) => {
                    return tweet === null || tweet === void 0 ? void 0 : tweet.text.toLowerCase().includes(option.toLowerCase());
                });
            });
        });
        return parsed;
    }
}
exports.TwitterService = TwitterService;
//# sourceMappingURL=twitter.service.js.map