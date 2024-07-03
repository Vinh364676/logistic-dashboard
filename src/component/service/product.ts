import { AxiosResponse } from "axios";
import { deleteAsync, getAsync, postAsync } from "./client";

class productService {
  get = async (params: any): Promise<AxiosResponse> => {
    try {
      const response = await getAsync('/product', {
        ...params,
        isPublish: true
      });
      return response;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Re-throwing the error to propagate it
    }
  }
  getById = async (_id: any): Promise<AxiosResponse> => {
    return await getAsync(`/product/${_id}`)
  }
  post = async (productData: any): Promise<AxiosResponse> => {
    return await postAsync('/product',productData);
  }
  delete = async (_id: any): Promise<AxiosResponse> => {
    return await deleteAsync(`/product/${_id}`);
  }
}

export default new productService();
