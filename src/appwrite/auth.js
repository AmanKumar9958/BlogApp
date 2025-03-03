import config from '../config.js';
import {Client, Account, ID} from 'appwrite';

export class AuthService{       // class AuthService
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }

    // createAccount method
    async createAccount({email, password, name}){
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);   // 1. Unique ID, 2. Email, 3. Password, 4. Name
            if(userAccount){
                // calling another method..
                return this.login({email, password});
            } else{
                return userAccount;
            }
        } catch (error){
            throw error;
        }
    }

    // login method
    async login({email, password}){{
        try{
            return await this.account.createEmailSession(email, password);
        } catch (error){
            throw error;
        }
    }
    }

    // getting current user
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
        return null;
    }

    // logout method
    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
};

const authService = new AuthService();   // instance/object of AuthService

export default authService;    // export default authService (object)