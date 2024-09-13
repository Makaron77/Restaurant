import React, { createContext, ReactNode, useState } from 'react';

export const UserContext = createContext({
	reserveActiveMenu: false,

	setReserveActiveMenu: (value: boolean) => {},
});

interface UserAppContextProps {
	children: ReactNode;
}

export const UserAppContext = ({ children }: UserAppContextProps) => {
	const [reserveActiveMenu, setReserveActiveMenu] = useState(false);
	return (
		<UserContext.Provider value={{ reserveActiveMenu, setReserveActiveMenu }}>
			{children}
		</UserContext.Provider>
	);
};
