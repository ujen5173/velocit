"use client";

import { type User } from "next-auth";
import { type ReactNode, createContext } from "react";

type RootContextProps = {
  user: User | null;
};

export const Context = createContext<RootContextProps>({
  user: null,
});

const RootContext = ({ children }: { children: ReactNode }) => {
  return (
    <Context.Provider value={{ user: null }}>
      <>{children}</>
    </Context.Provider>
  );
};

export default RootContext;