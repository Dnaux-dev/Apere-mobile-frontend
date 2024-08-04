// StatusBarContext.js
import React, { createContext, useContext, useState } from 'react';

const StatusBarContext = createContext();

export const StatusBarProvider = ({ children }) => {
  const [statusBarSettings, setStatusBarSettings] = useState({
    backgroundColor: '#fff',
    barStyle: 'dark-content',
  });

  return (
    <StatusBarContext.Provider value={{ statusBarSettings, setStatusBarSettings }}>
      {children}
    </StatusBarContext.Provider>
  );
};

export const useStatusBar = () => useContext(StatusBarContext);
