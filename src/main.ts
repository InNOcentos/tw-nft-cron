import { TwitterService } from './twitter.service';
import config from './config';
import { UserEntity } from './entities/user.entity';
import { TwitterEntity } from './entities/twitter.entity';

async function run() {
  try {
    const { consumerKey, consumerKeySecret, accessToken, accessTokenSecret } = config.user;
    const userEntity = new UserEntity(consumerKey, consumerKeySecret, accessToken, accessTokenSecret);
    const twitterEntity = new TwitterEntity(userEntity);
    const { id, username } = (await twitterEntity.userData).data;

    const twitterService = new TwitterService();

    const { tweets } = await twitterService.followUsers(twitterEntity, id);
    await twitterService.likeReplyRetweet(twitterEntity, tweets, id);
  } catch (err) {
    console.log(err);
  }
}

run();
