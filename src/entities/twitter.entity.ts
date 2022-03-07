//import TwitterApiHelper from 'twitter-lite';
import { TwitterApi } from 'twitter-api-v2';
import { TimeEntity } from './time.entity';
import { UserEntity } from './user.entity';

export class TwitterEntity {
  private _twitterApi: TwitterApi;

  constructor(user: UserEntity) {
    this._twitterApi = new TwitterApi({
      appKey: user.consumerKey,
      appSecret: user.consumerKeySecret,
      accessToken: user.accessToken,
      accessSecret: user.accessTokenSecret,
    });
  }

  get userData() {
    return this._twitterApi.currentUserV2();
  }

  async likeTweet(userId: string, tweetId: string) {
    return (await this._twitterApi.v2.like(userId, tweetId))?.data;
    //return (
    //await this._twitterApiHelper.post(`users/${userId}/likes`, {
    //tweet_id: tweetId,
    //})
    //)?.data;
  }

  async replyTweet(tweetId: string, data: string) {
    return (await this._twitterApi.v2.reply(data, tweetId))?.data;
    //return (
    //await this._twitterApiHelper.post(`tweets`, {
    //reply: {
    //in_reply_to_tweet_id: tweetId,
    //},
    //text: data,
    //})
    //)?.data;
  }

  async retweet(userId: string, tweetId: string) {
    return (await this._twitterApi.v2.retweet(userId, tweetId))?.data;
    //return (
    //await this._twitterApiHelper.post(`users/${userId}/retweets`, {
    //tweet_id: tweetId,
    //})
    //)?.data;
  }

  async followUser(myUserId: string, userId: string) {
    return (await this._twitterApi.v2.follow(myUserId, userId))?.data;
    //return (
    //await this._twitterApiHelper.post(`users/${userId}/following`, {
    //target_user_id: userId,
    //})
    //)?.data;
  }

  async getUsersIdsByNames(userNames: string[]) {
    if (!userNames.length) return [];

    return (await this._twitterApi.v2.usersByUsernames(userNames))?.data;
    //let resource = `users/by?usernames=`;
    //userNames.forEach((userName: string, idx: number, self: string[]) => {
    //resource += userName;
    //if (idx !== self.length - 1) resource += ',';
    //});
    //return (await this._twitterApiHelper.get(resource))?.data;
  }

  async getUserFollowings(userId: string) {
    return (await this._twitterApi.v2.following(userId))?.data;
    //return (await this._twitterApiHelper.get(`users/${userId}/following`))?.data;
  }

  async getUserTweets(userId: string) {
    let time = TimeEntity.of(new Date()).date.subtract(15, 'minutes').toISOString();
    return (await this._twitterApi.v2.userTimeline(userId, { start_time: time }))?.data;
    //return (await this._twitterApiHelper.get(`users/${userId}/tweets?tweet.fields=created_at`))?.data;
  }
}
