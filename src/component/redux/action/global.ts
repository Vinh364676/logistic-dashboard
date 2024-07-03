import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { GlobalState } from "../../@type/globalType";
import global from "../../service/globalService";


export const getByIdGlobal = createAsyncThunk(
    "get/getByIdGlobal",
    async (id: any) => {
      const { data } = await global.getById(id);
      return data;
    }
  );
  export const updateGlobal = createAsyncThunk(
    "global/updateGlobal",
    async ({ id, formData }: { id: any, formData: FormData }) => {
      const { data } = await global.updateById(id, formData);
      return data;
    }
  );
const initialState: GlobalState = {
    globalList: [],
    globalDetail:{
        _id:"",
        tag:"",
        title:"",
        desc:"",
        image:"",
        type:0
    }
 
};

const globalSlide = createSlice({
  name: "global",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getByIdGlobal.fulfilled, (state, action) => {
      state.globalDetail = action.payload.global;
    });
    builder.addCase(updateGlobal.fulfilled, (state, action) => {
      state.globalDetail = action.payload.global;
    });
  },
});

export default globalSlide.reducer;
