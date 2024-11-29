import { createSelector } from "reselect";

const selectImageIndices = (state, generalId) => {
  return state.photo.imageIndices[generalId] || null;
};

export const makeSelectPersonImageIndices = () =>
  createSelector(
    [
      selectImageIndices,
      (_, generalId) => generalId,
      (_, __, personId) => personId,
    ],
    (imageIndices, generalId, personId) => imageIndices?.[personId] || []
  );