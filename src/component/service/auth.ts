import { AxiosResponse } from "axios";
import { postAsync } from "./client";

class AuthService {
    login = async (loginData: { username: string, password: string }): Promise<AxiosResponse> => {
        return await postAsync('/account/login', loginData);
    }

    register = async (registerData: {
        firstName: string;
        lastName: string;
        gender:number;
        displayName:string;
        phoneNumber:string;
        dateOfBirth:string;
        email: string;
        password: string;
        address:string;
    }): Promise<AxiosResponse> => {
        return await postAsync('/Account/Register', registerData);
    };
}

const authService = new AuthService(); 

export default authService; 
