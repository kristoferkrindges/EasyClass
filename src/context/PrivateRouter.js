import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSessionContext } from "./SessionContextProvider";

export const PrivateRouter = () => {
	const { user } = useSessionContext();

	return user ? <Outlet /> : <Navigate to="/login" />;
};
