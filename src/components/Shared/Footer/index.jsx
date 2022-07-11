import React from "react";
import { 
	Container,
	FooterWrap,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	WebsiteRights,
	SocialIcons,
	SocialIconLink,
	FacebookIcon, 
    TwitterIcon,
    WhatsappIcon,
	InstagramIcon,
    YoutubeIcon,


} from "./styles";

export default function Footer() {
	return (
		<Container>
			<FooterWrap>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/">EasyClass</SocialLogo>
						<WebsiteRights>
							EasyClass {new Date().getFullYear()} Todos os direitos Reservados.
						</WebsiteRights>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</Container>
	);
}
