"use client";

import { Toaster } from "react-hot-toast";

import { SessionProvider } from "next-auth/react";
import { store
 } from "@/redux/store";
import { Provider } from "react-redux";

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster />  
      {/* //GlobalProvider is the top level. So added here. */}
      <Provider store={store}>     
      <SessionProvider>
      {children} 
      </SessionProvider>
      </Provider>
    </>
  );
}