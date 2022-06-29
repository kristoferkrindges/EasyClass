import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "./userContext";

export const PrivateRouter = () => {
	const { user } = useUserContext();

	return user ? <Outlet /> : <Navigate to="/login" />;
};
