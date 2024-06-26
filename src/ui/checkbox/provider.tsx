import { useState, type FC } from "react";
import { CheckBoxContext } from "./context";
import { CheckBoxProviderProps } from "./type";

export const CheckBoxProvider: FC<CheckBoxProviderProps> = ({ children }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return <CheckBoxContext.Provider value={{ isChecked, setIsChecked }}>{children}</CheckBoxContext.Provider>;
};
