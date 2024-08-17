import conf from '../conf/conf'
import { Client, Account, ID } from 'appwrite'

export class AuthService{
    client = new Client()
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                // call another method
                return this.login(email, password);
            }else
                return userAccount;
        } catch(error){
            throw error;
        }
    }

    async login({email, password}){
        try{
            return await this.account.createEmailPasswordSession(email, password);
        } catch(error){
            throw error;
        }
    }

    async logout(){
        try{
            await this.account.deleteSession(this.account.currentSession);
        } catch(error){
            throw error;
        }
    }

    async verifyEmail(){
        try{
            return await this.account.getVerification("#");
        } catch(error){
            throw error;
        }
    }

    async forgetPassword(){
        try{
            return await this.account.createRecovery(email, forgetpwdurl);
        } catch(error){
            throw error;
        }
    }

    async resetPassword(){
        try{
            return await this.account.updateRecovery(email, newpassword, forgetpwdurl);
        } catch(error){
            throw error;
        }
    }
}

const authService = new AuthService()

export default authService