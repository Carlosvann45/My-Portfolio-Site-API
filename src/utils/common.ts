import { Regex } from './constants';

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
}
