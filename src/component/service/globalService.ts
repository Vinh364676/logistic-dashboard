import { AxiosResponse } from "axios";
import {  getAsync, putAsync } from "./client";

class globalService {

  getById = async (id: any): Promise<AxiosResponse> => {
    return await getAsync(`/global/${id}`)
  }
  updateById = async (id: any, formData: FormData): Promise<AxiosResponse> => {
    return await putAsync(`/global/${id}`, formData);
  }
}

export default new globalService();
