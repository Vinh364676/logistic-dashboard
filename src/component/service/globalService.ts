import { AxiosResponse } from "axios";
import {  getAsync, putAsync } from "./client";

class GlobalService {

  getById = async (id: any): Promise<AxiosResponse> => {
    return await getAsync(`/global/${id}`)
  }
  updateById = async (id: any, formData: FormData): Promise<AxiosResponse> => {
    return await putAsync(`/global/${id}`, formData);
  }
}

const globalService = new GlobalService(); 

export default globalService; 
