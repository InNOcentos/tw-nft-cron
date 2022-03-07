"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
console.log(process.env);
console.log(1);
exports.default = {
    user: {
        consumerKey: process.env.consumer_key,
        consumerKeySecret: process.env.consumer_secret,
        accessToken: process.env.access_token_key,
        accessTokenSecret: process.env.access_token_secret,
    },
};
//# sourceMappingURL=config.js.map