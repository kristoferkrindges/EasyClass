import React from "react";
import { Container } from "./styles";
// import Typewriter from "react-simple-typewriter"
// import "react-simple-typewriter/dist/index"
export default function Article() {
	return (
		<Container>
			<section className="sec">
				<div className="content">
					<p>
						A Easy Class sempre criando talentos e transformando sonhos em
						realidade
						{/* <span>
							<Typewriter
								loop
								cursor
								cursorStyle="_"
								typeSpeed={70}
								deleteSpeed={50}
								delaySpeed={1000}
								words={["realidade", "esperança", "um futuro promissor"]}
							/>
						</span> */}
					</p>
				</div>
			</section>
		</Container>
	);
}
