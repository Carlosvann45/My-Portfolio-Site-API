"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class jwt {
    constructor(token, refreshToken) {
        this.token = token;
        this.refreshToken = refreshToken;
    }
    json() {
        return {
            token: this.token,
            refreshToken: this.refreshToken
        };
    }
}
exports.default = jwt;
