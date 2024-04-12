import { createContext, useState } from "react";

type ConfigContextValues = {
  enableRenderCount: boolean;
  setEnableRenderCount: (x: boolean) => void;
};
export const ConfigContext = createContext<ConfigContextValues | null>(null);

type Props = {
  children: React.ReactNode;
};

export const ConfigContextProvider = ({ children }: Props) => {
  const [enableRenderCount, setEnableRenderCount] = useState(true);
  return (
    <ConfigContext.Provider
      value={{
        enableRenderCount,
        setEnableRenderCount,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};
