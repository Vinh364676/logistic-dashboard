import { AxiosResponse } from "axios";
import {  getAsync } from "./client";

class contactService {

  get = async (id: any): Promise<AxiosResponse> => {
    return await getAsync(`/contact`)
  }
  
}

export default new contactService();
