import { Regex } from './constants';
import jwt, { JwtPayload } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

/*
* Common functions
*/
export default class Common {
    /**
     * checks if any input is valid or empty
     * 
     * @param data data to check
     * @returns boolean
     */
    static isNotEmpty (data: any): boolean {
        return (data && data.trim() != '');
    }

    /**
     * checks if string is a valid link
     * 
     * @param data link to test 
     * @returns boolean
     */
    static isLink(data: string): boolean {
        return Regex.LINK.test(data);
    }

    /**
     * checks if string is a valid date
     * 
     * @param date date stirng
     * @returns boolean
     */
    static validDate(date: string): boolean {
        return Regex.DATE.test(date);
    }

    /**
     * Handles encrypting data
     * 
     * @param data data to hash
     * @returns string promise
     */
    static async hashData(data: string): Promise<string> {
        const env = Number(process.env.SALT as string);
        const salt = await bcrypt.genSalt(env);

        return bcrypt.hash(data, salt);
    }

    /**
     * Handles verifing data matches encrypted data
     *  
     * @param data data to verify
     * @param hash has to verify
     * @returns boolean promise
     */
    static async hashVerified(data: string, hash: string): Promise<boolean> {
        return bcrypt.compare(data, hash);
    }

    /**
     * Handles generating either a normal or refresh token
     * @param id user id
     * @param refresh refresh boolean
     * @returns string promise
     */
    static async generateJwt(id: string, refresh: boolean = false): Promise<string> {
        const experation = refresh ? process.env.JWT_EXP_REFRESH : process.env.JWT_EXP;

        return jwt.sign({ 
            id,
            isRefreshtoken: refresh 
        }, process.env.JWT_SECRET as string, {
            expiresIn: experation,
            algorithm: process.env.JWT_ALG as jwt.Algorithm
        })
    }

    /**
     * Handles verifiying if token is valid 
     * 
     * @param token token
     * @returns string/jwtpatload
     */
    static async verifyJwt(token:string): Promise<string|JwtPayload> {
        return jwt.verify(token,process.env.JWT_SECRET as string, {
            ignoreExpiration: false
        })
    }
}
