//import { TimeEntity } from './entities/time.entity';
import { TwitterEntity } from './entities/twitter.entity';

export class TwitterService {
  constructor() {}

  async followUsers(twitter: TwitterEntity, myUserId: string) {
    const followings = await twitter.getUserFollowings(myUserId);
    const allTweets = [];
    for (let follow of followings) {
      const followTweets = await twitter.getUserTweets(follow?.id);
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

  async likeReplyRetweet(twitter: TwitterEntity, tweets: any, userId: string) {
    // TODO: fix
    const data = '@tiobeipio @Xiao_Nai @JANniicee';

    for (let tweet of tweets) {
      await twitter.likeTweet(userId, tweet.id);
      await twitter.replyTweet(tweet.id, data);
      await twitter.retweet(userId, tweet.id);
    }
  }

  private getTweetUsersToFollow(tweet: any) {
    return tweet.text.match(/@\w+/g).map((userName: string) => userName.replace(/@/g, ''));
  }

  private filterTweets(tweets: any) {
    const conditions = [
      ['WL', 'WHITELIST', 'GIVEAWAY'],
      ['RT', 'RETWEET'],
    ];
    const parsed = tweets.filter((tweet: any, idx: number, self: any[]) => {
      //const nowDate = TimeEntity.of(new Date());
      //const tweetDate = TimeEntity.of(tweet.created_at);
      //const minDiff = TimeEntity.duration(nowDate, tweetDate);
      //if (minDiff >= 15) {
      //return false;
      //}

      return conditions.every((condition: string[], idx: number, arr: typeof conditions) => {
        return condition.some((option: string) => {
          return tweet?.text.toLowerCase().includes(option.toLowerCase());
        });
      });
    });

    return parsed;
  }
}
