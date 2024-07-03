import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import productService from "../../service/product";
import { ProductState } from "../../@type/productType";

export const getProduct = createAsyncThunk(
    "get/getProduct",
    async (params: any) => {
      const { data } = await productService.get(params);
      return data;
    }
  );
  export const getByProductId = createAsyncThunk(
    "get/getByIDCategory",
    async (id: any) => {
      const { data } = await productService.getById(id);
      return data;
    }
  );
  export const postProduct = createAsyncThunk(
    "post/postProduct",
    async (productData: any) => {
      const { data } = await productService.post(productData);
      return data;
    }
  );
  export const delelteProduct = createAsyncThunk(
    "delete/delelteProduct",
    async (_id: string) => {

      await productService.delete(_id);
      return _id; 
    }
  );
const initialState: ProductState = {
  productList: [],
  productDetail: {
    _id:"",
    name:"",
    image:"",
    price:0,
    qrCode:"",
    quantity:0,
    category:0
  }
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.productList = action.payload.products;
    });
    builder.addCase(postProduct.fulfilled, (state, action) => {
      state.productList.push(action.payload);
    }); 
    builder.addCase(delelteProduct.fulfilled, (state, action) => {
      state.productList = state.productList.filter((product) => product._id !== action.payload);
    });  
    builder.addCase(getByProductId.fulfilled, (state, action) => {
      state.productDetail = action.payload.product;
    });
  },
});

export default productSlice.reducer;
