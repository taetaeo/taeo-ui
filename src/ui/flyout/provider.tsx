import React from "react";
import { FlyoutContext } from "./context";
import type { FlyoutProviderProps } from "./type";

export const FlyoutProvider = ({ children }: FlyoutProviderProps) => {
  const [isOpen, toggle] = React.useState<boolean>(false);
  return <FlyoutContext.Provider value={{ isOpen, toggle }}>{children}</FlyoutContext.Provider>;
};
