import React from "react";
import AvatarImage from "../../../../imagens/logo.jpeg";
import {
    Container,
    Card,
    Image,
    NameProfession,
    Name,
    Old,

} from "./style"


function Profile(props) {
    return(
      <Container>
        <Card>
          <Image>
            <img className="logo" src={props.logo}></img>
          </Image>
          <NameProfession>
            <Name>
              {props.name}
            </Name>
            <Old>
              Idade: {props.year}
            </Old>
            <Old>
              Email: {props.email}
            </Old>
          </NameProfession>
        </Card>
      </Container>
    )
}

export default Profile;