export class UserEntity {
  constructor(
    private _consumerKey: string,
    private _consumerKeySecret: string,
    private _accessToken: string,
    private _accessTokenSecret: string
  ) {}

  get consumerKey() {
    return this._consumerKey;
  }

  get consumerKeySecret() {
    return this._consumerKeySecret;
  }

  get accessToken() {
    return this._accessToken;
  }

  get accessTokenSecret() {
    return this._accessTokenSecret;
  }

  set consumerKey(key: string) {
    this._consumerKey = key;
  }

  set consumerKeySecret(key: string) {
    this._consumerKeySecret = key;
  }

  set accessToken(key: string) {
    this._accessToken = key;
  }

  set accessTokenSecret(key: string) {
    this._accessTokenSecret = key;
  }
}
