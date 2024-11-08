import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const submitForm = createAsyncThunk(
  'form/submitForm',
  async (formData, { rejectWithValue }) => {
    try {
      await axios.post("http://example.domain/dev/v1/contact-us", formData);
      return "Form submitted successfully";
    } catch (err) {
      return rejectWithValue("Submission failed. Please try again later.");
    }
  }
);

const initialState = {
  name: '',
  email: '',
  websiteUrl: '',
  projectDetails: '',
  status: null,
  error: null,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetForm: (state) => {
      state.name = '';
      state.email = '';
      state.websiteUrl = '';
      state.projectDetails = '';
      state.status = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitForm.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(submitForm.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      });
  },
});

export const { setFormField, resetForm } = formSlice.actions;
export const selectForm = (state) => state.form;

export default formSlice.reducer;
