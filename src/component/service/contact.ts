import { AxiosResponse } from "axios";
import {  getAsync } from "./client";

class ContactService {

  get = async (id: any): Promise<AxiosResponse> => {
    return await getAsync(`/contact`)
  }
  
}

const contactService = new ContactService(); 

export default contactService; 
