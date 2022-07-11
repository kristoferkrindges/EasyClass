import react from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
	[
		{
			title: "Home",
			path: "/login",
			icon: <AiIcons.AiFillHome />,
			cName: "nav-text",
		},

		{
			title: "Editar Perfil",
			path: "/editprofile",
			icon: <IoIcons.IoMdContact />,
			cName: "nav-text",
		},

		{
			title: "Buscar Professor",
			path: "/SearchTeacher",
			icon: <IoIcons.IoIosSearch />,
			cName: "nav-text",
		},
	],

	[
		{
			title: "Home",
			path: "/login",
			icon: <AiIcons.AiFillHome />,
			cName: "nav-text",
		},

		{
			title: "Editar Perfil",
			path: "/editprofile",
			icon: <IoIcons.IoMdContact />,
			cName: "nav-text",
		},

	],

	[
		{
			title: "Sair",
			path: "",
			icon: <IoIcons.IoMdExit />,
			cName: "nav-text",
		},
	],
];
