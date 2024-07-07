import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";

const contactsSlice = createSlice({
  name: "contacs",
  initialState: {
    items: [],
    loading: false,
    error: "",
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = state.items.filter((item) => item.id !== payload.id);
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items.push(payload);
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      }),
});

exsport;
