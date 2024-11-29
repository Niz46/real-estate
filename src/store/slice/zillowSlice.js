import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for fetching data
export const fetchZillowData = createAsyncThunk(
  "zillow/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://api.simplyrets.com/properties",
        {
          method: "GET",
          headers: {
            "Authorization": "Basic " + btoa("simplyrets:simplyrets"),
            "Accept": "application/json",
          },
        }
      );

      if (!response.ok) {
        // Throw an error if the status is not OK
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const zillowSlice = createSlice({
  name: "zillow",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchZillowData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchZillowData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchZillowData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default zillowSlice.reducer;
