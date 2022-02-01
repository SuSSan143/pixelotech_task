// @ts-nocheck
import { createContext } from "react";

export const FilteredItemContext = createContext({
  data: [],
});

export const SearchItemContext = createContext({ value: "" });

export const SelectItemContext = createContext({ value: "", fun: (id) => {} });

export const SelectTableNumberContext = createContext({ value: ''})

export const SelectCustomerNameContext = createContext('')