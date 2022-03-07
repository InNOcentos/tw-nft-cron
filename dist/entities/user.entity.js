"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
class UserEntity {
    constructor(_consumerKey, _consumerKeySecret, _accessToken, _accessTokenSecret) {
        this._consumerKey = _consumerKey;
        this._consumerKeySecret = _consumerKeySecret;
        this._accessToken = _accessToken;
        this._accessTokenSecret = _accessTokenSecret;
    }
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
    set consumerKey(key) {
        this._consumerKey = key;
    }
    set consumerKeySecret(key) {
        this._consumerKeySecret = key;
    }
    set accessToken(key) {
        this._accessToken = key;
    }
    set accessTokenSecret(key) {
        this._accessTokenSecret = key;
    }
}
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map