import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  imageIndices: {},
};

const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    initializeImageIndices: (state, action) => {
      const { generalId, personId, photoGroups } = action.payload;
      if (!state.imageIndices[generalId]) {
        state.imageIndices[generalId] = {};
      }
      state.imageIndices[generalId][personId] = photoGroups.map(() => 0);
    },
    nextImage: (state, action) => {
      const { generalId, personId, groupIndex, photoGroups } = action.payload;
      const groupIndices = state.imageIndices[generalId]?.[personId];
      if (groupIndices) {
        const nextImageIndex = groupIndices[groupIndex] + 1;
        if (nextImageIndex < photoGroups[groupIndex].length) {
          groupIndices[groupIndex] = nextImageIndex;
        } else {
          groupIndices[groupIndex] = 0;
        }
      }
    },
    prevImage: (state, action) => {
      const { generalId, personId, groupIndex, photoGroups } = action.payload;
      const groupIndices = state.imageIndices[generalId]?.[personId];
      if (groupIndices) {
        const prevImageIndex = groupIndices[groupIndex] - 1;
        if (prevImageIndex >= 0) {
          groupIndices[groupIndex] = prevImageIndex;
        } else {
          groupIndices[groupIndex] = photoGroups[groupIndex].length - 1;
        }
      }
    },
  },
});

export const { initializeImageIndices, nextImage, prevImage } =
  photoSlice.actions;
export default photoSlice.reducer;
