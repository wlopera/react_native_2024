import { createContext, useState } from "react";

export const CleanerContext = createContext({
  clean: false,
  chageCleaner: () => {},
});

const CleanerContextProvider = ({ children }) => {
  const [cleanValue, setCleanValue] = useState(false);

  const chageCleaner = () => {
    setCleanValue(!cleanValue);
  };

  const value = {
    clean: cleanValue,
    chageCleaner: chageCleaner,
  };

  return (
    <CleanerContext.Provider value={value}>{children}</CleanerContext.Provider>
  );
};

export default CleanerContextProvider;
