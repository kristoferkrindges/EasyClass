import { createContext } from "react";

const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
	const contextValue = {};
	return (
		<UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
	);
};
