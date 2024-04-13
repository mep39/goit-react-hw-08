import { selectContacts } from "../contacts/selectors";
import { createSelector } from "@reduxjs/toolkit";

export const selectNameFilter = (state) => state.filters.name;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.replace(/[^\d]/g, "").includes(filter)
    );
  }
);
