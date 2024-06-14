export default class jwt {
    public token: string;
    public refreshToken: string;

    constructor(token: string, refreshToken: string) {
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