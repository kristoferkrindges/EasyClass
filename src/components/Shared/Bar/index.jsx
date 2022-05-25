import React, {useState} from "react";
import { Container} from "./style";
import Nav from "./Nav"
function Bar(props) {

	return (
		<>
            <Nav
				name={props.name}
				type={props.type}
				icon={props.icon}
			/>
		</>
	);
}

export default Bar;
