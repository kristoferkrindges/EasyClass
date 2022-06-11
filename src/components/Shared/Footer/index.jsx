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
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>Sobre nós</FooterLinkTitle>
							<FooterLink to="/">Termos de serviço</FooterLink>
							<FooterLink to="/">Investidores</FooterLink>
							<FooterLink to="/">Corporação</FooterLink>
							<FooterLink to="/">Atividades</FooterLink>
							<FooterLink to="/">Quem somos</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Dúvidas</FooterLinkTitle>
							<FooterLink to="/">Contato</FooterLink>
							<FooterLink to="/">Suporte</FooterLink>
							<FooterLink to="/">Empresa</FooterLink>
							<FooterLink to="/">Professores</FooterLink>
							<FooterLink to="/">Alunos</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>Hello World</FooterLinkTitle>
							<FooterLink to="/">Hello World</FooterLink>
							<FooterLink to="/">Hello World</FooterLink>
							<FooterLink to="/">Hello World</FooterLink>
							<FooterLink to="/">Hello World</FooterLink>
							<FooterLink to="/">Hello World</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Redes Sociais</FooterLinkTitle>
							<FooterLink to="/">Instagram</FooterLink>
							<FooterLink to="/">Facebook</FooterLink>
							<FooterLink to="/">Twitter</FooterLink>
							<FooterLink to="/">Youtube</FooterLink>
							<FooterLink to="/">WhatsApp</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/">EasyClass</SocialLogo>
						<WebsiteRights>
							EasyClass {new Date().getFullYear()} Todos os direitos Reservados.
						</WebsiteRights>
							<SocialIcons>
								<SocialIconLink>
									<InstagramIcon></InstagramIcon>
								</SocialIconLink>
								<SocialIconLink>
									<FacebookIcon></FacebookIcon>
								</SocialIconLink>
								<SocialIconLink>
									<TwitterIcon></TwitterIcon>
								</SocialIconLink>
								<SocialIconLink>
									<YoutubeIcon></YoutubeIcon>
								</SocialIconLink>
								<SocialIconLink>
									<WhatsappIcon></WhatsappIcon>
								</SocialIconLink>
							</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</Container>
	);
}
