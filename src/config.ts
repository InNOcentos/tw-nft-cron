import dotenv from 'dotenv';
dotenv.config();

console.log(process.env);
console.log(1);

export default {
  user: {
    consumerKey: process.env.consumer_key as string,
    consumerKeySecret: process.env.consumer_secret as string,
    accessToken: process.env.access_token_key as string,
    accessTokenSecret: process.env.access_token_secret as string,
  },
};
