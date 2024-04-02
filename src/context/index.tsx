"use client"
import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface ClickedDate {
  date: string;
}

type DateType = "वि.सं." | "ई.सं.";

interface RootContextType {
  animation: boolean;
  setAnimation: Dispatch<SetStateAction<boolean>>;
  clickedDate: ClickedDate;
  setClickedDate: Dispatch<SetStateAction<ClickedDate>>;
  dropdownitem: DateType;
  setDropdownitem: Dispatch<SetStateAction<DateType>>;
}

const RootContext = createContext<RootContextType | null>(null);

interface RootContextProviderProps {
  children: ReactNode;
}

export function RootContextProvider({ children }: RootContextProviderProps): JSX.Element {
  const [animation, setAnimation] = useState<boolean>(false);
  const [clickedDate, setClickedDate] = useState<ClickedDate>({ date: "" });
  const [dropdownitem, setDropdownitem] = useState<DateType>("वि.सं.");

  const contextValue: RootContextType = {
    animation,
    setAnimation,
    clickedDate,
    setClickedDate,
    dropdownitem,
    setDropdownitem
  };

  return (
    <RootContext.Provider value={contextValue}>
      {children}
    </RootContext.Provider>
  );
}

export function useRoot(): RootContextType {
  const context = useContext(RootContext);

  if (context === null) {
    throw new Error("useRoot must be used within a RootContextProvider");
  }

  return context;
}
