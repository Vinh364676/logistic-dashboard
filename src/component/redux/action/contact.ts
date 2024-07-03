import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import contact from "../../service/contact";
import { ContactState } from "../../@type/contactType";


export const getContact = createAsyncThunk(
    "get/getContact",
    async (id: any) => {
      const { data } = await contact.get(id);
      return data;
    }
  );

const initialState: ContactState = {
    contactList: [],
  
 
};

const globalSlide = createSlice({
  name: "global",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getContact.fulfilled, (state, action) => {
      state.contactList = action.payload.contact;
    });
   
  },
});

export default globalSlide.reducer;
